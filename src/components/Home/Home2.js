import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-home.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I fell in love with programming and, honestly, I’m always learning something new every day. 🤷‍♂️
  <br />
  <br />
  I’m fluent in{" "}
  <i>
    <b className="purple">JavaScript, TypeScript, React.js, and Next.js</b>
  </i>{" "}
  — the core tools that power modern web experiences.
  <br />
  <br />
  My passion lies in building sleek, scalable, and user-centric front-end applications. I enjoy crafting seamless interfaces and engaging digital products that users love.
  <br />
  <br />
  When I’m not working on web projects, I’m diving into new web technologies and exploring the latest trends in front-end development. I also enjoy working with{" "}
  <i>
    <b className="purple">React Native</b>
  </i>{" "}
  for mobile apps and sometimes dive into backend development with{" "}
  <i>
    <b className="purple">Node.js</b>
  </i>{" "}
  to build full-stack solutions.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/meriammmmmm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meriam-mhadhbi-563bb9285/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=meriammhadhbi916@gmail.com"
  style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
                className="icon-colour  home-social-icons"

              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
