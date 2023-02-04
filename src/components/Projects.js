import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import img1 from "../assets/img/AGHA AHMED.png"
import img2 from "../assets/img/AGHA KUMAIL.png"
import img3 from "../assets/img/HASSAN ZAIB.png"
import img4 from "../assets/img/HANZALA KHAN.png"
import img5 from "../assets/img/TALHA AHMED.png"
import img6 from "../assets/img/UMAIR ALI.png"
import img7 from "../assets/img/USAMA SAEED.png"
import img8 from "../assets/img/KAFEEL.png"
import img9 from "../assets/img/USMAN AKRAM.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const team = [
    {
      title: "Agha Amed ",
      description: "Ceo",
      imgUrl: img1,
    },
    {
      title: "Kafeel Ur Rahman ",
      description: "Manager",
      imgUrl: img8,
    },
    {
      title: "Talha Ahmed",
      description: "Team Lead",
      imgUrl: img5,
    },
    {
      title: "Agha Kumail ",
      description: "2D desinger",
      imgUrl: img2,
    },
    {
      title: "Hassan Zaib",
      description: "MERN Developer",
      imgUrl: img3,
    },
    {
      title: "Hanzala Khan",
      description: "MERN Developer",
      imgUrl: img4,
    },
    {
      title: "Umair Ali",
      description: "Graphic Designer",
      imgUrl: img6,
    },
    {
      title: "Usama Saeed",
      description: "Video Editor",
      imgUrl: img7,
    },
    {
      title: "Usaman Akram",
      description: "CCNA Certified",
      imgUrl: img9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Us</h2>
                <p>The team of experienced developers, designers, and content writers aim to deliver custom software solutions that meet the unique needs of businesses using the latest technologies and industry best practices.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About Us</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          team.map((team, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...team}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Hextech Developers is a software development company that offers a wide range of services including web development, MERN stack development, WordPress, Shopify, mobile app development, React Native, android studio, desktop application development, C#, java, graphics design, logo designing, poster designing, 2D animation, and video editing. The team of experienced developers, designers, and content writers aim to deliver custom software solutions that meet the unique needs of businesses using the latest technologies and industry best practices.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
