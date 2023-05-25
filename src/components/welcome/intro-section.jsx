import React from "react";
import MedicineImage from "./medicine.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
function Welcome() {
  return (
    <Fade triggerOnce={true} direction="up">
      <Container className="global-intro-container">
        <Row>
          <Col lg={7} sm={12}>
            <div className="intro-div">
              <h1 className="intro-h1">Care Stream Agency</h1>
              <h5 className="intro-h5">Where we treat your health as #1</h5>
            </div>
          </Col>
          <Col lg={5} sm={12}>
            {" "}
            <img alt="intro" className="intro-img" src={MedicineImage}></img>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Welcome;
