import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meriam Mhadhbi. </span>
           
            <br />
            I’m a Front-End Web Developer with<span className="purple"> +3 years of hands-on experience</span>  building responsive, user-centric web applications.
            <br />
            I specialize in <span className="purple">modern JavaScript frameworks</span> such as React ,Next, and have a strong foundation in agile development methodologies.

            <br />
            <br />
            I'm passionate about creating clean, scalable code and delivering seamless user experiences across devices.

</p>
         

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
