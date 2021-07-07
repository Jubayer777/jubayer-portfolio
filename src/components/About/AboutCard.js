import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Jubayer Al Alam </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />A goal getter, self-motivated as well as creative and ambitious IT professional with strong analytical skills and proven track record of exceeding
                performance targets. The ability to resolve complex problem with creative ideas. Bringing deep understanding of Modern HTML, JavaScript, CSS and React as well as intermediate knowledge in NodeJS, and MongoDB.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Writhing
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Reading Books
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Movies
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#fcca6d" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jubayer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
