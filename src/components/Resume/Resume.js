import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/jubayer_al_alam.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title="Full Stack Web Developer"
              date="I have following skills"
              content={[
                "Expertise: HTML, CSS, JavaScript, ES6, React, API, Bootstrap, Material UI.",
                "Intermediate: NodeJS, MongoDB, Express, SCSS.",
                "Comfortable: C, C++, C#, Java.",
                "Familiar: Redux, Firebase, Netlify, Heroku",
                "Tools: Git, Chrome Dev Tool, VS Code, NetBeans, Code Blocks.",
              ]}
            />
            <h3 className="resume-title">Professional Training</h3>
            <Resumecontent
              title="Complete web development with Jhankar Mahbub [January 2021-present]"
              content={[
                "Learning core concept of web application and modern javascript framework.",
              ]}
            />
            <Resumecontent
              title="Industrial Training at Mistri Solutions [January 2021-present]"
              content={[
                "Learning how the application is build, maintenance, deploy and handover to client professionally.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BSC in Computer Science and Engineering [ International University of Business Agriculture and Technology (IUBAT), Uttara, Dhaka, Bangladesh ]"
              date="2017 - Present"
              content={[`CGPA: 3.86 / 4.00`]}
            />
            <Resumecontent
              title="Higher Secondary Certificate (HSC) [Ideal College, Dhanmondi, Dhaka, bangladesh]"
              date="2015"
              content={["GPA: 5.00 / 5.00"]}
            />
            <Resumecontent
              title="Secondary School Certificate (SSC) [Khoksha Janipur Pilot High School, Khoksha, kushtia, bangladesh] "
              date="2013"
              content={["GPA: 5.00 / 5.00"]}
            />
            <h3 className="resume-title">Personal Interest</h3>
            <Resumecontent
              title=""
              content={[
                "Problem Solving",
                "Writing",
                "Reading Books",
                "Watching Movies"
                
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;


