import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-dark mt-5 p-5" fluid>
      <Row>
        <Col xs={12} md={12}>
          <h4 className="text-white text-center">SUBSCRIBE NOW</h4>
          <h2 className="text-white text-center">
            GET OUR UPDATES ALWAYS FAST{" "}
          </h2>
          <h5 className="text-white text-center mt-2">
            YOUR PERSONAL DATA WILL ALWAYS BE SAFE
          </h5>
          <InputGroup className="mb-3 w-25 mx-auto">
            <FormControl
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              Subscribe Now
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
