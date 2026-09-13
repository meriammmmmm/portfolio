import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll-reveal, done from JS rather than CSS on purpose.
 *
 * The hiding class (`reveal`) is ADDED by this component, so if the script
 * never runs — old browser, JS error upstream, crawler — the page renders
 * exactly as it did before, fully visible. A CSS-first version would leave
 * everything at opacity: 0 in those cases.
 *
 * Nothing here needs a wrapper component in the tree: it matches on the class
 * names the pages already use, so adding a section to a page gets the effect
 * for free as long as it uses one of them (or carries `data-reveal`).
 */

// Elements revealed one after another inside their own container.
const GROUPS = [
  ".rd-grid > .rd-card",
  ".rd-case__shots > figure",
  ".rd-tiles > .rd-tile",
  ".rd-timeline > .rd-timeline__item",
  ".rd-facts > .rd-facts__row",
  ".rd-case__list > li",
  ".rd-case__stack .rd-card__tags > .rd-tag",
];

// Elements revealed on their own.
const SINGLES = [
  ".rd-hero__copy",
  ".rd-hero__art",
  ".rd-section",
  ".rd-tabs",
  ".rd-case__head",
  ".rd-case__shot",
  ".rd-case__gallery",
  ".rd-case__main",
  ".rd-case__aside",
  ".rd-case__next",
  ".rd-cta",
  ".rd-resume__head",
  ".rd-resume__frame",
  "[data-reveal]",
];

const STAGGER_MS = 80;
const MAX_STAGGER_MS = 480; // long lists shouldn't trickle in forever

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    // Respect the OS setting: leave every element untouched and visible.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return undefined;

    // Everything prepared but not yet revealed. Kept so the fast-scroll sweep
    // below has something small to walk.
    const pending = new Set();

    const reveal = (el, instant) => {
      if (instant) el.style.setProperty("--reveal-delay", "0ms");
      el.classList.add("is-visible");
      pending.delete(el);
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target, false);
        });
      },
      // Fire a little before the element reaches the fold, and only once a
      // reasonable slice of it is on screen.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    // A fast wheel, a scrollbar drag or a jump to an anchor can carry an
    // element from below the fold to above it inside a single frame. Its
    // intersection ratio reads 0 on both sides, so no threshold is ever
    // crossed and the observer stays silent — the element would be stuck
    // invisible for the rest of the session. Sweep for anything already
    // scrolled past and show it outright.
    const sweep = () => {
      pending.forEach((el) => {
        if (el.getBoundingClientRect().bottom <= 0) reveal(el, true);
      });
      if (!pending.size) window.removeEventListener("scroll", onScroll);
    };

    let sweepFrame = 0;
    function onScroll() {
      if (sweepFrame) return;
      sweepFrame = window.requestAnimationFrame(() => {
        sweepFrame = 0;
        sweep();
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    const prepare = (el, delayMs) => {
      if (el.dataset.revealReady) return;
      el.dataset.revealReady = "1";
      if (delayMs) el.style.setProperty("--reveal-delay", `${delayMs}ms`);
      el.classList.add("reveal");
      pending.add(el);
      observer.observe(el);
    };

    // Containers whose children have already been dealt with once. Anything
    // that shows up inside them afterwards came from a filter tab or the
    // language switch re-rendering the list — not from the reader arriving at
    // that part of the page — so it is left untouched and simply appears.
    // Replaying the entrance on every tab click reads as a glitch.
    const settled = new WeakSet();

    const scan = () => {
      // Re-arm the sweep listener for anything newly added below the fold.
      window.addEventListener("scroll", onScroll, { passive: true });

      GROUPS.forEach((selector) => {
        const seen = new Map();
        document.querySelectorAll(selector).forEach((el) => {
          const parent = el.parentElement;
          if (settled.has(parent)) {
            // Mark it handled so later scans skip it, but add no classes —
            // it renders at full opacity like any ordinary element.
            el.dataset.revealReady = "1";
            return;
          }
          const i = seen.get(parent) ?? 0;
          seen.set(parent, i + 1);
          prepare(el, Math.min(i * STAGGER_MS, MAX_STAGGER_MS));
        });
        seen.forEach((_count, parent) => settled.add(parent));
      });

      SINGLES.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => prepare(el, 0));
      });
    };

    scan();

    // The projects grid is re-rendered when a filter tab is clicked, and the
    // language switch swaps whole blocks — catch whatever appears later.
    // Only childList is watched, so the class/attribute writes in prepare()
    // can't feed back into this observer; the frame coalesce keeps a burst of
    // React mutations down to a single scan.
    const root = document.querySelector(".App") || document.body;
    let frame = 0;
    const mutations = new MutationObserver(() => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        scan();
      });
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (sweepFrame) window.cancelAnimationFrame(sweepFrame);
      window.removeEventListener("scroll", onScroll);
      mutations.disconnect();
      observer.disconnect();
      pending.clear();
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
