import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useT } from "../../i18n";

// Keys only — the copy itself lives in src/i18n/ui.js so all three languages
// stay side by side.
const FACT_KEYS = [
  ["home2.factExperience", "home2.factExperienceValue"],
  ["home2.factBased", "home2.factBasedValue"],
  ["home2.factStack", "home2.factStackValue"],
  ["home2.factAlso", "home2.factAlsoValue"],
];

function Home2() {
  const t = useT();

  return (
    <>
      <section className="rd-section rd-section--alt" id="about">
        <div className="rd-container">
          <div className="rd-hero" style={{ padding: 0 }}>
            <div>
              <p className="rd-eyebrow">{t("home2.eyebrow")}</p>
              <h2 className="rd-title">{t("home2.title")}</h2>

              <p className="rd-sub">
                {t("home2.p1a")}
                <span className="purple">{t("home2.p1b")}</span>
                {t("home2.p1c")}
              </p>

              <p className="rd-sub">
                {t("home2.p2a")}
                <span className="purple">{t("home2.p2b")}</span>
                {t("home2.p2c")}
                <span className="purple">{t("home2.p2d")}</span>
                {t("home2.p2e")}
              </p>
            </div>

            <div className="rd-hero__art">
              <dl className="rd-facts">
                {FACT_KEYS.map(([labelKey, valueKey]) => (
                  <div className="rd-facts__row" key={labelKey}>
                    <dt>{t(labelKey)}</dt>
                    <dd>{t(valueKey)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-cta">
            <h2 className="rd-title">{t("home2.ctaTitle")}</h2>
            <p className="rd-sub">{t("home2.ctaSub")}</p>

            <a
              className="rd-btn rd-btn--solid rd-cta__btn"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=meriammhadhbi916@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail /> {t("home2.ctaButton")}
            </a>

            <ul className="rd-socials rd-cta__socials">
              <li>
                <a
                  href="https://github.com/meriammmmmm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/meriam-mhadhbi-563bb9285/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=meriammhadhbi916@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home2;
