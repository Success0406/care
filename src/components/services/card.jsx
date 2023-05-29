import React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import Col from "react-bootstrap/Col";

const ServiceCard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Col xs={12} sm={12} md={6} lg={6}>
      <Fade triggerOnce={true} duration={1000} direction="up">
        <div className="service-card-div">
          <img
            src={props.image}
            style={{ height: "40%", width: "40%", margin: "5% 15%" }}
            className="card-img"
            alt={props.alt}
          />
          <h5>{props.title}</h5>
          <p>{props.text}</p>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            style={{ marginBottom: "5%" }}
          >
            Learn More
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">{props.text}</div>
          </Collapse>
        </div>{" "}
      </Fade>
      <hr />
    </Col>
  );
};

export default ServiceCard;
