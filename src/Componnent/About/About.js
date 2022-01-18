import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h2 style={{ marginLeft: 192 }}>About The ElectroShop</h2>

      <Row>
        <Col xs={12} md={8} className=" mx-auto">
          <ul>
            <li>This is a phone sales website</li>
            <li>You can Buy phon in this website</li>
            <li>You can also manage product or order with this website</li>
            <li>Admin can cancle,approve order</li>
            <li>user see their order, he also cancel the order</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
