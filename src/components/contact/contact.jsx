import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Fade, Slide } from "react-awesome-reveal";
import { Row, Col, Container } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="contact-div" id="contact-section">
      <Fade triggerOnce={true}>
        <h1 style={{ textAlign: "center" }}>Get In Contact With Us</h1>
        <h3 style={{ textAlign: "center", marginTop: "5%" }}>
          For quality care that is right for you, call Care Stream Agency
        </h3>
      </Fade>

      <Container>
        <Row>
          <Col lg={6} sm={12} style={{ textAlign: "center" }}>
            <Slide direction="left" triggerOnce={true}>
              <h3
                className="contact-form"
                style={{ textAlign: "center", marginBottom: "5%" }}
              >
                Get In Touch
              </h3>
              <a
                href="https://www.google.com/maps/place/Care+Stream+Agency/@39.9553856,-82.8575354,17z/data=!3m2!4b1!5s0x8838631ac6480ae3:0x5295230118505962!4m6!3m5!1s0x8838631ac8b44a53:0xcda234ef6ca243c8!8m2!3d39.9553815!4d-82.8549605!16s%2Fg%2F11q2y_zrrs?entry=ttu"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                5340 E Main St, Whitehall, OH 43213
              </a>
              <br />
              <a
                href="mailto:carestreamagency@gmail.com"
                style={{ textDecoration: "none", color: "black" }}
              >
                carestreamagency@gmail.com
              </a>

              <p>
                Phone:
                <a href="tel:6148683395">(614) 868-3395</a>
              </p>
              <p>Fax: (614) 737-521</p>
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.3742042074873!2d-82.85753542516613!3d39.955385583591074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838631ac8b44a53%3A0xcda234ef6ca243c8!2sCare%20Stream%20Agency!5e0!3m2!1sen!2sus!4v1685031417775!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="address"
                ></iframe>
              </div>
            </Slide>
          </Col>
          <Col lg={6} sm={12}>
            <Slide direction="right" triggerOnce={true}>
              <h3
                className="contact-form"
                style={{ textAlign: "center", marginBottom: "5%" }}
              >
                Send A Message
              </h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    required={true}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required={true}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
