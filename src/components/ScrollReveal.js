import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll-reveal.
 *
 * Two rules shaped this file, both learned the hard way:
 *
 * 1. The hiding class (`reveal`) is added by THIS SCRIPT, never in the markup.
 *    If the script never runs, the page renders exactly as it would without
 *    any of this — fully visible.
 *
 * 2. Visibility is decided by measuring the element, not by trusting
 *    IntersectionObserver. An observer that never fires its callback — a fast
 *    scroll, a layout that settles late, a browser quirk — leaves content at
 *    opacity 0 with nothing to recover it, which is a blank page. A plain
 *    getBoundingClientRect() check on scroll can't get into that state, and
 *    the cost is nil because the pending set empties as the page is read.
 *
 * style.css carries a last-resort CSS animation that un-hides everything a few
 * seconds in, so even a thrown exception here cannot leave the page empty.
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
const ENTER_AT = 0.92; // reveal once the top has come into the lower 92% of the viewport

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    // Respect the OS setting: leave every element untouched and visible.
    const reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced && reduced.matches) return undefined;

    const pending = new Set();

    const reveal = (el, instant) => {
      if (instant) el.style.setProperty("--reveal-delay", "0ms");
      el.classList.add("is-visible");
      pending.delete(el);
    };

    // The whole engine. Anything showing in the viewport is revealed with its
    // stagger; anything the reader has already scrolled past is shown at once,
    // with no delay, so a fast scroll never leaves a gap behind it.
    const check = () => {
      if (!pending.size) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0) reveal(el, true);
        else if (r.top < vh * ENTER_AT) reveal(el, false);
      });
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        check();
      });
    };

    // Containers whose children have already been dealt with once. Anything
    // appearing inside them afterwards came from a filter tab or the language
    // switch re-rendering the list, not from the reader arriving at that part
    // of the page — replaying the entrance on every tab click reads as a glitch.
    const settled = new WeakSet();

    const prepare = (el, delayMs) => {
      if (el.dataset.revealReady) {
        // Adopt orphans. On a route change React commits the new page before
        // it flushes effects, so the OUTGOING effect's mutation watcher can
        // prepare the new page's elements — hiding them and adding them to a
        // pending set that its own cleanup then throws away. This effect would
        // otherwise skip them here as "already handled" and nothing would ever
        // reveal them: a hidden element with no owner is a blank page. If it
        // is hidden and unclaimed, claim it.
        if (
          el.classList.contains("reveal") &&
          !el.classList.contains("is-visible")
        ) {
          pending.add(el);
        }
        return;
      }
      el.dataset.revealReady = "1";
      if (delayMs) el.style.setProperty("--reveal-delay", `${delayMs}ms`);
      el.classList.add("reveal");
      pending.add(el);
    };

    const scan = () => {
      GROUPS.forEach((selector) => {
        const seen = new Map();
        document.querySelectorAll(selector).forEach((el) => {
          const parent = el.parentElement;
          if (settled.has(parent)) {
            // Marked handled, but given no classes — it renders at full
            // opacity like any ordinary element.
            el.dataset.revealReady = "1";
            return;
          }
          const i = seen.get(parent) || 0;
          seen.set(parent, i + 1);
          prepare(el, Math.min(i * STAGGER_MS, MAX_STAGGER_MS));
        });
        seen.forEach((_count, parent) => settled.add(parent));
      });

      SINGLES.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => prepare(el, 0));
      });

      // Decide on the new elements on the next frame, so the ones already in
      // view still play their transition instead of snapping to visible.
      schedule();
    };

    scan();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("orientationchange", schedule);
    window.addEventListener("load", schedule);

    // Images and web fonts land after first paint and move everything below
    // them. Re-measure a few times over the first couple of seconds rather
    // than trusting the initial layout.
    const settleTimers = [120, 400, 900, 1800, 3000].map((ms) =>
      window.setTimeout(check, ms)
    );

    // The projects grid is re-rendered when a filter tab is clicked, and the
    // language switch swaps whole blocks. Only childList is watched, so the
    // class writes in prepare() can't feed back in.
    const root = document.querySelector(".App") || document.body;
    let scanFrame = 0;
    const mutations = new MutationObserver(() => {
      if (scanFrame) return;
      scanFrame = window.requestAnimationFrame(() => {
        scanFrame = 0;
        scan();
      });
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (scanFrame) window.cancelAnimationFrame(scanFrame);
      settleTimers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
      window.removeEventListener("load", schedule);
      mutations.disconnect();
      pending.clear();
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
