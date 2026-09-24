import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/*
 * ScrollProgress — a hairline accent bar pinned to the top of the viewport
 * that fills as the reader moves down the page. Pure rAF-throttled scroll
 * math; scaleX keeps it on the compositor.
 */
function ScrollProgress() {
  const barRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <div className="rd-progress" aria-hidden="true">
      <div ref={barRef} className="rd-progress__bar" />
    </div>
  );
}

export default ScrollProgress;
