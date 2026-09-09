import React, { useState, useEffect, useRef } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/Meriam-Mhadhbi-CV.pdf";
import {
  AiOutlineDownload,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useT, useLang } from "../../i18n";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const t = useT();
  const { dir } = useLang();
  const frameRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(820);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Size the PDF to its CONTAINER, not to window.innerWidth. The old code used
  // scale={1.7} on wide screens, which rendered a page wider than the viewport
  // and pushed the whole section into horizontal overflow — which is why the
  // background stopped partway across the page.
  useEffect(() => {
    const measure = () => {
      const available = frameRef.current
        ? frameRef.current.clientWidth
        : window.innerWidth;
      setPageWidth(Math.max(280, Math.min(available - 32, 820)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const onDocumentLoadSuccess = ({ numPages: n }) => {
    setNumPages(n);
    setPageNumber(1);
  };

  const nextPage = () => setPageNumber((p) => Math.min(p + 1, numPages ?? 1));
  const prevPage = () => setPageNumber((p) => Math.max(p - 1, 1));

  const PrevIcon = dir === "rtl" ? AiOutlineRight : AiOutlineLeft;
  const NextIcon = dir === "rtl" ? AiOutlineLeft : AiOutlineRight;

  const downloadBtn = (
    <a
      className="rd-btn rd-btn--solid"
      href={pdf}
      target="_blank"
      rel="noreferrer"
    >
      <AiOutlineDownload /> {t("resume.download")}
    </a>
  );

  return (
    <div className="resume-section">
      <Particle />

      <div className="rd-container">
        <div className="rd-resume__head">
          <p className="rd-eyebrow">{t("resume.eyebrow")}</p>
          <h1 className="rd-title">{t("resume.title")}</h1>
          <p className="rd-sub">{t("resume.sub")}</p>
          <div className="rd-resume__actions">{downloadBtn}</div>
        </div>

        <div className="rd-resume__frame" ref={frameRef}>
          <div className="rd-resume__doc">
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<p className="rd-resume__loading">{t("resume.loading")}</p>}
              error={
                <p className="rd-resume__loading">{t("resume.error")}</p>
              }
            >
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>

          {numPages > 1 && (
            <div className="rd-resume__pager">
              <button
                type="button"
                className="pdf-nav-btn"
                onClick={prevPage}
                disabled={pageNumber <= 1}
                aria-label={t("resume.prevPage")}
              >
                <PrevIcon />
              </button>

              <span className="page-indicator">
                {t("resume.pageLabel")} {pageNumber} {t("resume.pageOf")}{" "}
                {numPages}
              </span>

              <button
                type="button"
                className="pdf-nav-btn"
                onClick={nextPage}
                disabled={pageNumber >= numPages}
                aria-label={t("resume.nextPage")}
              >
                <NextIcon />
              </button>
            </div>
          )}
        </div>

        <div className="rd-resume__actions rd-resume__actions--bottom">
          {downloadBtn}
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
