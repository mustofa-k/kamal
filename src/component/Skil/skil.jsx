import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faBootstrap, faCss3Alt, faNodeJs, faPhp } from "@fortawesome/free-brands-svg-icons";
import { SiNextdotjs } from "react-icons/si"; // Mengimpor ikon Next.js dari react-icons
import "./skil.css"; // Import file CSS khusus

const Skil = () => {
  return (
    <>
      <Container>
        <h1 className="display-6 mb-5 text-center">
          <span className="text-span">Skills</span>
        </h1>
        <div className="skill-section p-5">
          <div className="skil">
            <Row className="text-center">
              <Col md={3} className="skill-item">
                <div className="skill-box">
                  <FontAwesomeIcon icon={faReact} size="5x" className="icon react-icon" />
                  <p className="skill-name">React js</p>
                </div>
              </Col>
              <Col md={3} className="skill-item">
                <div className="skill-box">
                  <FontAwesomeIcon icon={faBootstrap} size="5x" className="icon bootstrap-icon" />
                  <p className="skill-name">Bootstrap</p>
                </div>
              </Col>
              <Col md={3} className="skill-item">
                <div className="skill-box">
                  <FontAwesomeIcon icon={faCss3Alt} size="5x" className="icon tailwind-icon" />
                  <p className="skill-name">Tailwind CSS</p>
                </div>
              </Col>
              <Col md={3} className="skill-item">
                <div className="skill-box">
                  <SiNextdotjs className="icon nextjs-icon" />
                  <p className="skill-name">Next.js</p>
                </div>
              </Col>
              <Col md={3} className="skill-item">
                <div className="skill-box">
                  <FontAwesomeIcon icon={faNodeJs} size="5x" className="icon express-icon" />
                  <p className="skill-name">Express.js</p>
                </div>
              </Col>
              <Col md={3} className="skill-item">
                <div className="skill-box">
                  <FontAwesomeIcon icon={faPhp} size="5x" className="icon phpmyadmin-icon" />
                  <p className="skill-name">phpMyAdmin</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Skil;
