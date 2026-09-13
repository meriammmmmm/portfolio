import React from "react";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { useT } from "../../i18n";

// Straight from the CV — experience and education, in place of the old
// decorative illustration. Keys only; the copy lives in src/i18n/ui.js.
const TIMELINE = [
  {
    id: "job1",
    period: "about.job1Period",
    title: "about.job1Title",
    org: "about.job1Org",
    notes: [
      "about.job1Note1",
      "about.job1Note2",
      "about.job1Note3",
      "about.job1Note4",
    ],
  },
  {
    id: "job2",
    period: "about.job2Period",
    title: "about.job2Title",
    org: "about.job2Org",
    notes: ["about.job2Note1", "about.job2Note2"],
  },
  {
    id: "job3",
    period: "about.job3Period",
    title: "about.job3Title",
    org: "about.job3Org",
    notes: [],
  },
];

function About() {
  const t = useT();

  return (
    <div className="about-section">
      <Particle />

      <div className="rd-container">
        <div className="rd-hero">
          <div>
            <p className="rd-eyebrow">{t("about.eyebrow")}</p>
            <Aboutcard />
          </div>

          <div className="rd-hero__art">
            <ol className="rd-timeline">
              {TIMELINE.map((item) => (
                <li className="rd-timeline__item" key={item.id}>
                  <span className="rd-timeline__period">{t(item.period)}</span>
                  <h3 className="rd-timeline__title">{t(item.title)}</h3>
                  <p className="rd-timeline__org">{t(item.org)}</p>
                  {item.notes.length > 0 && (
                    <ul className="rd-timeline__notes">
                      {item.notes.map((n) => (
                        <li key={n}>{t(n)}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <section className="rd-section" style={{ textAlign: "center" }}>
          <p className="rd-eyebrow">{t("about.skillsEyebrow")}</p>
          <h2 className="rd-title">
            {t("about.skillsTitleA")}
            <span className="purple">{t("about.skillsTitleB")}</span>
          </h2>
          <Techstack />
        </section>

        <section className="rd-section" style={{ textAlign: "center" }}>
          <p className="rd-eyebrow">{t("about.toolsEyebrow")}</p>
          <h2 className="rd-title">
            <span className="purple">{t("about.toolsTitleA")}</span>
            {t("about.toolsTitleB")}
          </h2>
          <Toolstack />
        </section>
      </div>
    </div>
  );
}

export default About;
