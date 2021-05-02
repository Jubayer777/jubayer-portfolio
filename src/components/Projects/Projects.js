import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import plumbPerfect from "../../Assets/Projects/plumbperfect.png";
import sunrise from "../../Assets/Projects/sunrise.png";
import fantasyGames from "../../Assets/Projects/fantasy.png";
import cityTravels from "../../Assets/Projects/city-travels.png";
import hungryMonster from "../../Assets/Projects/hungrymonster.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

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
              imgPath={plumbPerfect}
              isBlog={false}
              title="Plumb Perfect"
              description={
                <div id="dvLinks">
                  <h6><strong>Online plumbing service provider </strong></h6>
                  <p>Features:</p>
                  <ol>
                    <li>Used React, Bootstrap, CSS, MongoDB, Express JS, firebase authentication and private Route.</li>
                    <li>User can see verities of plumbing services </li>
                    <li>For booking any services user must have to login.</li>
                    <li>Separate dashboard for admin and user.</li>
                    <li>Full control over admin.</li>
                    <li>Data update, deleted and managed by logged in admin</li>
                    <li>Stripe payment method implemented.</li>
                    <li>Fully responsive for all devices.</li>
                  </ol>
                  <br/>
                  <p>Technology:</p>
                  <small>JavaScript (React), HTML, CSS, Node, Bootstrap, React router, Firebase, Heroku, MongoDB </small>
                </div>
              }
              gitLink="https://github.com/Jubayer777/Plumb-perfect-client"
              liveLink="https://nifty-mccarthy-b614ee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunrise}
              isBlog={false}
              title="Sunrise Mart"
              description={
                <div id="dvLinks">
                  <h6><strong>Online grocery shop</strong></h6>
                  <p>Features:</p>
                  <ol>
                    <li>Used React, Bootstrap, CSS, MongoDB, Express JS, firebase authentication and private Route.</li>
                    <li>User can see verities of grocery products </li>
                    <li>For buying any products user must have to login.</li>
                    <li>Showing products dynamically on UI.</li>
                    <li>Data update, deleted and managed by logged in user</li>
                    <li>Generating order history for individual user.</li>
                    <li>Fully responsive for all devices.</li>
                    <br/>
                  </ol>
                  <p>Technology:</p>
                  <small>JavaScript (React), HTML, CSS, Node, Bootstrap, React router, Firebase, Heroku, MongoDB </small>
                </div>
              }
              gitLink="https://github.com/Jubayer777/Sunrise-mart-client"
              liveLink="https://elegant-hermann-648410.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fantasyGames}
              isBlog={false}
              title="Fantasy Games"
              description={
              <div id="dvLinks">
              <h6><strong>Provides sports league details</strong></h6>
              <p>Features:</p>
              <ol>
                <li>Used React, React-bootstrap, CSS, React-routing.</li>
                <li>Used sports API for collecting and showing all the information.</li>
                <li>Home page contains a banner on the top and almost 21 leagues of different sports on the bellow.</li>
                <li>User can explore each of league in details.</li>
                <li>Details page contain dynamic league banner, logo and a league data card.</li>
                <li>Gender Image and icons changes based on league gender.</li>
                <li>In the bellow it displays league details in English and French.</li>
                <li>Fully responsive for all devices.</li>
              </ol>
              <br/>
              <p>Technology:</p>
              <small>JavaScript (React), HTML, CSS, Bootstrap, React router </small>
            </div>
          }
          gitLink="https://github.com/Jubayer777/Fantasy-games"
          liveLink="https://angry-keller-23c24d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cityTravels}
              isBlog={false}
              title="City Travels"
              description={
                <div id="dvLinks">
                <h6><strong>Online based traveling services</strong></h6>
                <p>Features:</p>
                <ol>
                  <li>Used React, React-router and Dynamic routing, google map.</li>
                  <li>Used firebase authentication with general registration.</li>
                  <li>For booking any ride user need to login and provide the booking information.</li>
                  <li>Based on the booking information available ride will be shown.</li>
                  <li>Fully responsive for all devices.</li>
                </ol>
                <br/>
                <p>Technology:</p>
                <small>JavaScript (React), HTML, CSS, Bootstrap, React router </small>
              </div>
            }
            gitLink="https://github.com/Jubayer777/city-travels"
            liveLink="https://practical-fermat-71b3ba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hungryMonster}
              isBlog={false}
              title="Hungry Monster"
              description={
                <div id="dvLinks">
                <h6><strong>Provides various of food details</strong></h6>
                <p>Features:</p>
                <ol>
                  <li>Used HTML, CSS, Bootstrap and Vanilla Js.</li>
                  <li>Used Mealdb api for collecting and showing information.</li>
                  <li>User can search any food here.</li>
                  <li>By clicking search output user can see full details of that meal.</li>
                  <li>Fully responsive for all devices.</li>
                </ol>
                <br/>
                <p>Technology:</p>
                <small>JavaScript, HTML, CSS, Bootstrap</small>
              </div>
            }
            gitLink="https://github.com/Jubayer777/hungry-monster"
            liveLink="https://jubayer777.github.io/hungry-monster/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
