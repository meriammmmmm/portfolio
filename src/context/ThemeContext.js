import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "theme";

// Light is the primary design. Dark is the alternative, and visitors whose OS
// asks for dark get it — but anything ambiguous resolves to light.
const DEFAULT_THEME = "light";

const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
});

// The inline script in public/index.html has already resolved the theme and
// written it onto <html data-theme="...">, so read that first and stay in sync.
function readInitialTheme() {
  if (typeof window === "undefined") return DEFAULT_THEME;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {
    // localStorage can throw in private mode — fall through.
  }

  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;

  return DEFAULT_THEME;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  // Reflect the theme onto <html> so the CSS custom properties switch.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#0f172a" : "#ffffff");
    }
  }, [theme]);

  // Follow the OS setting, but only until the visitor picks a theme by hand.
  useEffect(() => {
    if (!window.matchMedia) return undefined;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (event) => {
      let stored = null;
      try {
        stored = window.localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        // ignore
      }
      if (!stored) setTheme(event.matches ? "dark" : "light");
    };

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
