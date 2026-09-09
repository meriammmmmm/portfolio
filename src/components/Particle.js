import React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

/**
 * The starfield. One fixed, full-viewport canvas per page, sitting behind all
 * content (CSS: position fixed, z-index 0, pointer-events none — so it can
 * never intercept a click).
 *
 * Colour follows the theme: white stars on the dark ground, slate dots on the
 * light one, where white would be invisible.
 */
function Particle() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Light mode uses the CSS aurora on the hero instead — grey specks read as
  // dust on white. Returning null also stops the animation loop entirely.
  if (!isDark) return null;

  return (
    <Particles
      key={theme}
      id="tsparticles"
      params={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 170,
            density: { enable: true, value_area: 1200 },
          },
          color: { value: isDark ? "#ffffff" : "#94a3b8" },
          line_linked: { enable: false },
          move: { direction: "right", speed: 0.09, straight: false },
          size: { value: 1.4, random: true },
          opacity: {
            value: isDark ? 0.85 : 0.45,
            random: true,
            // the twinkle
            anim: {
              enable: true,
              speed: 0.9,
              opacity_min: isDark ? 0.08 : 0.05,
              sync: false,
            },
          },
        },
        interactivity: {
          events: { onclick: { enable: false }, onhover: { enable: false } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
