import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Meriam-Mhadhbi-FlowCV-Resume-20251015.pdf";
import {
  AiOutlineDownload,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < (numPages ?? 1)) setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row
          className="resume justify-content-center"
          style={{ position: "relative" }}
        >
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              scale={width > 1230 ? 1.7 : width > 786 ? 1.2 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          {/* Floating Navigation Buttons */}
          <button
            className="pdf-nav-btn left"
            onClick={prevPage}
            disabled={pageNumber <= 1}
          >
            <AiOutlineLeft />
          </button>

          <button
            className="pdf-nav-btn right"
            onClick={nextPage}
            disabled={pageNumber >= (numPages ?? 1)}
          >
            <AiOutlineRight />
          </button>

          {/* Page Indicator */}
          <div className="page-indicator">
            Page {pageNumber} of {numPages}
          </div>
        </Row>

        {/* Bottom Download Button */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
