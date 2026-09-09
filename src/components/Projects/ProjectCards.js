import React from "react";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useT } from "../../i18n";

function ProjectCards({
  slug,
  imgPath,
  title,
  description,
  tags = [],
  demoLink,
  linkLabel,
}) {
  const t = useT();

  return (
    <article className="rd-card">
      <Link className="rd-card__media" to={`/project/${slug}`} tabIndex={-1} aria-hidden="true">
        {imgPath ? (
          <img
            className="rd-card__thumb"
            src={imgPath}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="rd-card__thumb rd-card__thumb--empty">
            <span>{title.charAt(0)}</span>
          </div>
        )}
      </Link>

      <div className="rd-card__body">
        <h3 className="rd-card__title">
          <Link to={`/project/${slug}`}>{title}</Link>
        </h3>
        <p className="rd-card__desc">{description}</p>

        {tags.length > 0 && (
          <ul className="rd-card__tags">
            {tags.map((tag) => (
              <li className="rd-tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="rd-card__foot">
          <Link className="rd-btn rd-btn--solid" to={`/project/${slug}`}>
            {t("card.caseStudy")} <AiOutlineArrowRight />
          </Link>

          {demoLink && (
            <a
              className="rd-btn rd-btn--outline"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> {linkLabel || t("card.visit")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
