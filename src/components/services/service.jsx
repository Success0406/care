import React from "react";
import Card from "./card";
import Doctor from "./doctor.svg";
import Doctors from "./doctors.svg";

import Nurses from "./nurses.svg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const Service = () => {
  return (
    <div className="service-div" id="service-section">
      <h1 className="service-h1">Our Services</h1>

      <Container>
        <Row className="service-row">
          <Card
            title={"Post Surgery Care"}
            image={Doctor}
            alt={"doctor"}
            text={
              "We'll make sure after sugery you are feeling well and better than ever before!"
            }
            color={"#54E0FF"}
            btnMessage={"Learn More"}
          />
          <Card
            title={"Post Surgery Care"}
            image={Doctors}
            alt={"doctors"}
            text={
              "We'll make sure after sugery you are feeling well and better than ever before!"
            }
            color={"#54E0FF"}
            btnMessage={"Learn More"}
          />
          <Card
            title={"Post Surgery Care"}
            image={Nurses}
            alt={"nurses"}
            text={
              "We'll make sure after sugery you are feeling well and better than ever before!"
            }
            color={"#54E0FF"}
            btnMessage={"Learn More"}
          />
          <Card
            title={"Post Surgery Care"}
            image={Doctor}
            alt={"doctor"}
            text={
              "We'll make sure after sugery you are feeling well and better than ever before!"
            }
            color={"#54E0FF"}
            btnMessage={"Learn More"}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Service;
