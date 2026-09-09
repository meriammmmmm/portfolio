import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Portrait from "./Portrait";
import pdf from "../../Assets/Meriam-Mhadhbi-CV.pdf";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { useT } from "../../i18n";

function Home() {
  const t = useT();

  return (
    <section>
      <div className="home-section" id="home">
        <Particle />

        <div className="rd-container">
          <div className="rd-hero">
            <div className="rd-hero__copy">
              <p className="rd-eyebrow">{t("home.eyebrow")}</p>

              <h1 className="rd-hero__title">{t("home.title")}</h1>

              <div className="rd-hero__role">
                <Type />
              </div>

              <p className="rd-hero__blurb">{t("home.blurb")}</p>

              <div className="rd-actions">
                <Link className="rd-btn rd-btn--solid" to="/project">
                  <CgWebsite /> {t("home.viewWork")}
                </Link>
                <a
                  className="rd-btn rd-btn--outline"
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineDownload /> {t("home.downloadCV")}
                </a>
              </div>

              <ul className="rd-socials">
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

            <div className="rd-hero__art">
              <Portrait />
            </div>
          </div>
        </div>
      </div>

      <Home2 />
    </section>
  );
}

export default Home;
