import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UI } from "./ui";
import { PROJECT_TEXT, FIELD_TEXT } from "./projectText";

const STORAGE_KEY = "lang";
const DEFAULT_LANG = "en";

// The three languages the site ships in. `dir` drives the RTL rules at the
// bottom of style.css — Arabic mirrors the whole layout.
export const LANGS = {
  en: { code: "en", short: "EN", label: "English", dir: "ltr" },
  fr: { code: "fr", short: "FR", label: "Français", dir: "ltr" },
  ar: { code: "ar", short: "AR", label: "العربية", dir: "rtl" },
};

export const LANG_LIST = Object.values(LANGS);

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  dir: "ltr",
  setLang: () => {},
  t: (key) => key,
});

// The inline script in public/index.html resolves the language before first
// paint and writes it onto <html lang dir>, so read that first and stay in sync.
function readInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS[stored]) return stored;
  } catch (e) {
    // localStorage throws in private mode — fall through.
  }

  const attr = document.documentElement.getAttribute("lang");
  if (attr && LANGS[attr]) return attr;

  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  if (LANGS[nav]) return nav;

  return DEFAULT_LANG;
}

// "detail.overview" -> UI[lang].detail.overview, falling back to English so a
// missing translation shows real copy instead of a raw key.
function lookup(lang, key) {
  const walk = (dict) =>
    key.split(".").reduce((acc, part) => (acc == null ? acc : acc[part]), dict);

  const hit = walk(UI[lang]);
  if (hit != null) return hit;

  const fallback = walk(UI[DEFAULT_LANG]);
  return fallback != null ? fallback : key;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);
  const dir = LANGS[lang] ? LANGS[lang].dir : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    // The browser tab should follow the language too.
    document.title = lookup(lang, "meta.title");
  }, [lang, dir]);

  const setLang = useCallback((next) => {
    if (!LANGS[next]) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
  }, []);

  const t = useCallback((key) => lookup(lang, key), [lang]);

  const value = useMemo(
    () => ({ lang, dir, setLang, t }),
    [lang, dir, setLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}

// Merge a project's English record with the translated copy for the active
// language. Structure (slug, images, stack, links) never changes — only prose.
export function localizeProject(project, lang) {
  if (!project) return project;
  if (lang === DEFAULT_LANG) return project;

  const text = (PROJECT_TEXT[lang] || {})[project.slug];
  const fields = FIELD_TEXT[lang] || {};

  const localized = {
    ...project,
    role: fields.role?.[project.role] || project.role,
    year: fields.year?.[project.year] || project.year,
    type: project.type, // kept in English: it is the filter key
    typeLabel: fields.type?.[project.type] || project.type,
    linkLabel: project.linkLabel
      ? fields.linkLabel?.[project.linkLabel] || project.linkLabel
      : project.linkLabel,
  };

  if (!text) return localized;

  if (text.summary) localized.summary = text.summary;
  if (text.overview) localized.overview = text.overview;
  if (text.highlights?.length) localized.highlights = text.highlights;

  // Captions travel as a parallel array so the image list stays single-sourced.
  if (text.captions?.length && project.gallery?.length) {
    localized.gallery = project.gallery.map((shot, i) => ({
      ...shot,
      caption: text.captions[i] || shot.caption,
    }));
  }

  return localized;
}

export default LanguageContext;
