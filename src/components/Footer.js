import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useT } from "../i18n";

const LINKS = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/project", key: "nav.projects" },
  { to: "/resume", key: "nav.resume" },
];

function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="rd-footer">
      <div className="rd-container rd-footer__inner">
        <div className="rd-footer__brand">
          <strong>{t("brand.name")}</strong>
          <span>
            {t("footer.tagline")} {year}
          </span>
        </div>

        <ul className="rd-footer__links">
          {LINKS.map(({ to, key }) => (
            <li key={key}>
              <Link to={to}>{t(key)}</Link>
            </li>
          ))}
        </ul>

        <ul className="rd-socials">
          <li>
            <a
              href="https://github.com/meriammmmmm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/meriam-mhadhbi-563bb9285/"
              target="_blank"
              rel="noopener noreferrer"
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
    </footer>
  );
}

export default Footer;
