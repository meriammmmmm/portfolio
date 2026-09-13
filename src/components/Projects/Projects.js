import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useProjects, useT } from "../../i18n";

const ALL = "All";

function Projects() {
  const t = useT();
  const projects = useProjects();
  const [active, setActive] = useState(ALL);

  // Client work vs. self-directed work. Derived from the data so a new type
  // creates its own tab. The VALUE stays English — it is the filter key — and
  // only the label is translated.
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.type)))],
    [projects]
  );

  const visible = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.type === active)),
    [active, projects]
  );

  const countFor = (cat) =>
    cat === ALL ? projects.length : projects.filter((p) => p.type === cat).length;

  const labelFor = (cat) =>
    cat === ALL ? t("projects.all") : t(`type.${cat}`);

  return (
    <div className="project-section">
      <Particle />

      <div className="rd-container">
        <div data-reveal style={{ textAlign: "center", paddingTop: 40 }}>
          <p className="rd-eyebrow">{t("projects.eyebrow")}</p>
          <h1 className="rd-title">
            {t("projects.titleA")}
            <span className="purple">{t("projects.titleB")}</span>
          </h1>
          <p className="rd-sub">{t("projects.sub")}</p>
        </div>

        <div className="rd-tabs" role="tablist" aria-label={t("projects.filterLabel")}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`rd-tab${active === cat ? " is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {labelFor(cat)}
              <span className="rd-tab__count">{countFor(cat)}</span>
            </button>
          ))}
        </div>

        <div className="rd-grid">
          {visible.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              imgPath={p.img}
              title={p.title}
              description={p.summary}
              tags={p.tags}
              demoLink={p.demoLink}
              linkLabel={p.linkLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
