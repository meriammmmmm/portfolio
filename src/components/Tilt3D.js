import React, { useRef, useCallback } from "react";

/*
 * Tilt3D — cursor-reactive 3D tilt, no WebGL.
 *
 * The wrapper rotates its child in perspective toward the pointer and
 * publishes CSS custom properties so stylesheets can build depth on top:
 *
 *   --tilt-x / --tilt-y : pointer position, -0.5 … 0.5 (0 = centred)
 *   --mx    / --my      : pointer position, 0% … 100% (for glare/spotlight)
 *   --tilt-max          : max rotation angle (set per instance via prop)
 *
 * Children tagged with .depth-1 / .depth-2 / .depth-3 are pushed toward the
 * viewer at different translateZ values, so tilting reveals real parallax.
 */
function Tilt3D({
  children,
  className = "",
  max = 9,
  scale = 1.02,
  ...rest
}) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tilt-x", x.toFixed(4));
    el.style.setProperty("--tilt-y", y.toFixed(4));
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0");
    el.style.setProperty("--tilt-y", "0");
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt3d ${className}`.trim()}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ "--tilt-max": `${max}deg`, "--tilt-scale": scale }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Tilt3D;
