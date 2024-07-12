// Hero.js
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import imgkamal from "../assets/kamal.png";
// Sesuaikan dengan nama file CSS yang Anda buat

function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textAnimationDuration = 1000;
    const timer = setTimeout(() => {
      document.querySelectorAll(".text-col, .box-sosmed").forEach((element) => {
        element.classList.add("show");
      });
    }, textAnimationDuration);

    return () => clearTimeout(timer);
  }, [showText]);

  return (
    <Container className="hero">
      <Row>
        <Col md={6} className={`text-col slide-in-left ${showText ? "show" : ""}`}>
          <Row>
            <Col md={2}>
              <div>
                <a className="btn sosmed btn-lg btn-floating mt-3" href="#!" role="button">
                  <FontAwesomeIcon className="text-white" icon={faInstagram} />
                </a>
                <a className="btn sosmed btn-lg btn-floating mt-3" href="#!" role="button">
                  <FontAwesomeIcon className="text-white" icon={faWhatsapp} />
                </a>
                <a className="btn sosmed btn-lg btn-floating mt-3" href="#!" role="button">
                  <FontAwesomeIcon className="text-white" icon={faGithub} />
                </a>
                <a className="btn sosmed btn-lg btn-floating mt-3" href="#!" role="button">
                  <FontAwesomeIcon className="text-white" icon={faLinkedin} />
                </a>
              </div>
            </Col>
            <Col md={10}>
              <div className="header d-flex">
                <p>Hello! </p>
                <p className="ms-3 beda"> I am</p>
              </div>
              <div className="name">Mustofa Kamal</div>

              <div className="web d-flex">
                Website <p className="beda ms-3">Developer</p>
              </div>

              <p>
                As a dedicated web developer at Raharja University, I, Mustofa Kamal, aged 21, have a great passion for developing my technical skills. With the knowledge I have gained through this study program, I have mastered various
                relevant concepts and technologies in the IT world. I enjoy the continuous learning process and am always eager to explore related fields such as software development, network security, and data analysis. With my passion
                for learning, I am committed to continuously improving myself and making a positive contribution to the world of web development.
              </p>

              <button className="btn btn-danger">Download CV</button>
            </Col>
          </Row>
        </Col>
        <Col md={6} className={`image-col slide-in-right ${showText ? "show" : ""}`}>
          <div className="image-container">
            <div className="kotak"></div>
            <img src={imgkamal} alt="" className="centered-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
