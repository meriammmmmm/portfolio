import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import annodoc from "../../Assets/Projects/annodoc.png";
import imtiyaz from "../../Assets/Projects/imtiyaz.png";
import StarbBussnies from "../../Assets/Projects/star-bussnies.png";
import recruitment from "../../Assets/Projects/recruitment.png";
import osthedhy from "../../Assets/Projects/osthedhy.png";
import SoftyDinner from "../../Assets/Projects/SoftyDinner.png";
import quiz from "../../Assets/Projects/quiz.png";
import softySkills from "../../Assets/Projects/softySkills.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recruitment}
              isBlog={false}
              title="RH Recruitment"
              description=" RH Recruitment is a comprehensive recruitment platform that enables companies to post jobs and internships while allowing candidates to submit their applications"
              demoLink="https://recruitment.softylines.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SoftyDinner}
              isBlog={false}
              title="SoftyDinner"
              description="SoftyDinner is a digital solution designed to simplify food reservations in a corporate environment. It connects employees, allowing them to reserve meals in advance, reduce waiting times, and minimize food waste."
              demoLink="https://softydinner.softylines.com/dashboard/user/users"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={annodoc}
              isBlog={false}
              title="Annodoc"
              description="Annodoc is a modern PDF platform designed to transform the way individuals and teams work with documents. It goes beyond traditional PDF editors by enabling real-time collaboration, intuitive annotation tools, and simple sharing — all in one seamless solution."
              demoLink="https://annodoc.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StarbBussnies}
              isBlog={false}
              title="Star Business"
              description="Star Business is a consultancy service specializing in guiding entrepreneurs, startups, and corporations through the process of establishing and managing businesses in the United Arab Emirates. With expert knowledge of local regulations, Star Business makes company setup simple, fast, and compliant, while offering long-term support in business operations."
              demoLink="https://star-business.net/en"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osthedhy}
              isBlog={false}
              title="Ostedhy"
              description="Ostedhy is an online educational platform that offers interactive live lessons and classes in various subjects for all levels  from the seventh grade up to the preparatory stage for engineering studies and the French baccalaureate. These lessons are delivered by a group of highly qualified and experienced teachers."
              demoLink="https://ostedhy.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imtiyaz}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Imtiyazacademy is a Mauritanian digital platform offering national curricula online through modern technology. It provides high-quality education with detailed lessons, interactive exercises, and regular assessments, guided by experienced teachers in a flexible and secure learning environment."
              demoLink="https://imtiyazacademy.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="We Quizz"
              description="Innovative Teaching, Seamless Quizzes .We Quizz makes it easy for educators to craft quizzes that captivate students and promote deep understanding"
              demoLink="https://wequizz.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={softySkills}
              isBlog={false}
              title="Softy Skills"
              description="Softy Skills provides practical web development training with an emphasis on hands-on experience.The courses are designed to give students a deep understanding of concepts while developing the skills necessary to thrive in today's job market."
              demoLink="https://softyskills.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
