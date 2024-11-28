import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard"; // Import new EducationCard component
import projImg1 from "../assets/img/chefconnectFrontPage.jpg";
import projImg2 from "../assets/img/image.png";
import projImg3 from "../assets/img/Portfolio.png";
import projImg4 from "../assets/img/Zerodha.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [heading, setHeading] = useState("Education"); // Default heading set to Education

  // Education details
  const educationDetails = [
    { degree: "BE Computer", year: "2021-2025", details: "CGPA: 8.19" },
    { degree: "12th [CBSE]", year: "2021", details: "Percentage: 93%" },
    { degree: "10th [CBSE]", year: "2019", details: "Percentage: 86%" },
  ];

  // Projects
  const projects = [
    {
      title: "ChefConnect",
      description: "A MERN-based chef-ordering web app with real-time communication and payment features.",
      imgUrl: projImg1,
      status: "Going On",
    },
    {
      title: "Wanderlust",
      description: "Tour and travel application built with Node.js and Express.js.",
      imgUrl: projImg2,
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects using React.",
      imgUrl: projImg3,
      status: "Completed",
    },
    {
      title: "Zerodha",
      description: "A cryptocurrency trading platform built with MERN stack.",
      imgUrl: projImg4,
      status: "Going On",
    }
  ];

  // Experience
  const experiences = [
    {
      title: "WebDeveloper Intern",
      description: "During my internship at Technoartz as a Web Development Intern, I gained hands-on experience working with technologies like HTML, CSS, JavaScript, Bootstrap, and AngularJS to design and develop responsive, user-friendly web pages. I contributed to building single-page applications (SPA) using AngularJS, focusing on dynamic data binding and seamless content updates. Collaborating closely with my team, I actively participated in code reviews, debugging, and optimizing performance, which enhanced my technical and teamwork skills. While adapting to AngularJS concepts like directives and dependency injection was initially challenging, it significantly broadened my expertise. This internship provided valuable real-world exposure to professional web development practices and strengthened my ability to deliver high-quality, user-centric solutions.",
      imgUrl: projImg1,
    },
    {
      title: "Backend Developer Intern",
      description: "Developed REST APIs with Node.js and Express for an e-commerce platform.",
      imgUrl: projImg2,
    },
  ];

  // Function to update heading based on active tab
  const handleTabChange = (eventKey) => {
    if (eventKey === "first") {
      setHeading("Education");
    } else if (eventKey === "second") {
      setHeading("Projects");
    } else if (eventKey === "third") {
      setHeading("Experience");
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{heading}</h2>
                  <p>
                    {heading === "Education" && "Explore my academic journey, achievements, and performance metrics."}
                    {heading === "Projects" && "Here are the projects I have worked on, showcasing my skills and expertise."}
                    {heading === "Experience" && "Highlighting my professional experience and internship roles."}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleTabChange}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      
                      {/* Education Tab */}
                      <Tab.Pane eventKey="first">
                        {educationDetails.map((education, index) => (
                          <EducationCard key={index} {...education} />
                        ))}
                      </Tab.Pane>

                      {/* Projects Tab */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Experience Tab */}
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <Col xs={12} md={8}>
                            <div className="text-center">
                              <ul className="">
                                <li className="lead">During my internship at Technoartz as a Web Development Intern, I gained hands-on experience working with technologies like HTML, CSS, JavaScript, Bootstrap, and AngularJS to design and develop responsive, user-friendly web pages. I contributed to building single-page applications (SPA) using AngularJS, focusing on dynamic data binding and seamless content updates. Collaborating closely with my team, I actively participated in code reviews, debugging, and optimizing performance, which enhanced my technical and teamwork skills. While adapting to AngularJS concepts like directives and dependency injection was initially challenging, it significantly broadened my expertise. This internship provided valuable real-world exposure to professional web development practices and strengthened my ability to deliver high-quality, user-centric solutions.</li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
