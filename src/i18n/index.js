import { useMemo } from "react";
import { PROJECTS } from "../data/projects";
import {
  LanguageProvider,
  useLang,
  useT,
  localizeProject,
  LANGS,
  LANG_LIST,
} from "./LanguageContext";

// The whole project list, translated into the active language.
export function useProjects() {
  const { lang } = useLang();
  return useMemo(() => PROJECTS.map((p) => localizeProject(p, lang)), [lang]);
}

// One project by slug, translated. Returns undefined for an unknown slug so the
// caller can redirect.
export function useProject(slug) {
  const { lang } = useLang();
  return useMemo(() => {
    const found = PROJECTS.find((p) => p.slug === slug);
    return found ? localizeProject(found, lang) : undefined;
  }, [slug, lang]);
}

export { LanguageProvider, useLang, useT, localizeProject, LANGS, LANG_LIST };
