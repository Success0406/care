import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../repeats/button";
import ListGroup from "react-bootstrap/ListGroup";
import { Fade } from "react-awesome-reveal";
import Col from "react-bootstrap/Col";

const ServiceCard = (props) => {
  return (
    <Col xs={12} sm={6} md={3} lg={4}>
      <Fade triggerOnce={true} duration={1000} direction="up">
        <Card className="service-card">
          <Card.Img
            variant="top"
            style={{ height: "70%", width: "70%", margin: "5% 15% 0" }}
            className="card-img"
            src={props.image}
          />
          <Card.Body>
            <Card.Title className="margin-bottom">{props.title}</Card.Title>
            <Card.Text className="margin-bottom">{props.text}</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item className="margin-bottom">
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
            <Button
              message={props.btnMessage}
              backgroundColor={props.color}
            ></Button>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};

export default ServiceCard;
