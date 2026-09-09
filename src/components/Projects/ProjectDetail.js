import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Particle from "../Particle";
import { PROJECTS } from "../../data/projects";
import { useProject, useT, useLang, localizeProject } from "../../i18n";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function ProjectDetail() {
  const { slug } = useParams();
  const t = useT();
  const { lang, dir } = useLang();
  const project = useProject(slug);

  // Unknown slug (old bookmark, typo) — send them back to the grid.
  if (!project) return <Navigate to="/project" replace />;

  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const next = localizeProject(PROJECTS[(index + 1) % PROJECTS.length], lang);

  const facts = [
    { k: t("detail.role"), v: project.role },
    { k: t("detail.year"), v: project.year },
    { k: t("detail.type"), v: project.typeLabel || project.type },
    { k: t("detail.builtAt"), v: project.company },
  ].filter((f) => f.v);

  // The "next" arrow should point the way reading runs.
  const NextArrow = dir === "rtl" ? AiOutlineArrowLeft : AiOutlineArrowRight;
  const BackArrow = dir === "rtl" ? AiOutlineArrowRight : AiOutlineArrowLeft;

  return (
    <div className="project-section">
      <Particle />

      <div className="rd-container">
        <Link className="rd-back" to="/project">
          <BackArrow /> {t("detail.back")}
        </Link>

        <header className="rd-case__head">
          <p className="rd-eyebrow">
            {t("detail.projectPrefix")}
            {project.typeLabel || project.type}
            {t("detail.projectSuffix")}
          </p>
          <h1 className="rd-title">{project.title}</h1>
          <p className="rd-sub">{project.summary}</p>

          {project.demoLink && (
            <div className="rd-actions">
              <a
                className="rd-btn rd-btn--solid"
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> {project.linkLabel || t("detail.visitSite")}
              </a>
            </div>
          )}
        </header>

        <img
          className="rd-case__shot"
          src={project.img}
          alt={`${project.title} ${t("detail.screenshotAlt")}`}
        />

        {project.gallery?.length > 0 && (
          <section className="rd-case__gallery">
            <h2 className="rd-case__h2">{t("detail.moreScreens")}</h2>
            <div className="rd-case__shots">
              {project.gallery.map((shot) => (
                <figure key={shot.src}>
                  <img src={shot.src} alt={shot.caption} loading="lazy" />
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="rd-case__body">
          <div className="rd-case__main">
            <section>
              <h2 className="rd-case__h2">{t("detail.overview")}</h2>
              <p className="rd-case__p">{project.overview}</p>
            </section>

            {project.highlights?.length > 0 && (
              <section>
                <h2 className="rd-case__h2">{t("detail.whatIBuilt")}</h2>
                <ul className="rd-case__list">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="rd-case__aside">
            <div className="rd-facts">
              {facts.map(({ k, v }) => (
                <div className="rd-facts__row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </div>

            <div className="rd-case__stack">
              <h2 className="rd-case__h2">{t("detail.techStack")}</h2>
              <ul className="rd-card__tags">
                {project.stack.map((tech) => (
                  <li className="rd-tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <Link className="rd-case__next" to={`/project/${next.slug}`}>
          <span>{t("detail.nextProject")}</span>
          <strong>
            {next.title} <NextArrow />
          </strong>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
