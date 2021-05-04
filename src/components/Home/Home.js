import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/profile1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/jubayer.pdf";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Jubayer Al Alam</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <Button className="mt-5" variant="primary" href={pdf} target="_blank">
                  <i className="fas fa-download">&nbsp;</i>Download Resume
                 </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20}}>
              <img style={{ height: '350px',paddingTop: '20px'}} src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
