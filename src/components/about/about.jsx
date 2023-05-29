import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Park from "./park.svg";
import { Row, Col, Container } from "react-bootstrap";
const About = () => {
  return (
    <div className="about-div" id="about-section">
      <Container>
        <Fade triggerOnce={true}>
          <h1 className="about-h1">What Are We All About?</h1>
        </Fade>
        <Row>
          <Col lg={6} md={12}>
            <Slide triggerOnce={true} direction="left">
              <p className="about-p">
                Care Stream Agency’s advanced home health care service enhances
                the quality of life and well-being for people with different
                functionality levels – no matter their age, race, sex, or faith.
                Our commitment is to encourage and promote the health, dignity,
                and independence of our clients, thereby enhancing the quality
                of their daily living activities. Because we have the heart of
                care, Care Stream Agency delights in providing high caliber of
                care that meets the wide range of our clients’ requirements.
              </p>
              <p>
                To provide quality care that meets the needs of our clients, we
                recruit staff members proven to have the heart of care everyday.
                We know that our clients need caregivers that are dedicated,
                trustworthy, dependable, honest, and polite. Our distinguished
                staff is respectful and protects the privacy of every
                individual. Our employees are required to pass through
                background check and thorough screening. They are trained and
                committed to being supportive, professional, and compassionate
                in meeting our clients physical and emotional needs.
              </p>
            </Slide>
          </Col>

          <Col lg={6} md={12}>
            <Slide triggerOnce={true} direction="right">
              <img className="about-img" src={Park} alt="Park"></img>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
