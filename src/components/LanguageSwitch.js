import React, { useEffect, useRef, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { useLang, LANG_LIST } from "../i18n";

/**
 * Language picker for the navbar. Three languages is too many for a plain
 * toggle and too few to justify a select, so: a button showing the current
 * code, opening a small menu.
 */
function LanguageSwitch() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return undefined;

    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANG_LIST.find((l) => l.code === lang) || LANG_LIST[0];

  return (
    <div className="rd-lang" ref={ref}>
      <button
        type="button"
        className="rd-lang__btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        title={t("nav.language")}
      >
        <TbWorld aria-hidden="true" />
        <span>{current.short}</span>
      </button>

      {open && (
        <ul className="rd-lang__menu" role="listbox" aria-label={t("nav.language")}>
          {LANG_LIST.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                className={`rd-lang__opt${l.code === lang ? " is-active" : ""}`}
                lang={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className="rd-lang__code">{l.short}</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitch;
