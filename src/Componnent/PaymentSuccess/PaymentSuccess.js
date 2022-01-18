import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const PaymentSuccess = () => {
  return (
    <Container>
      <Row>
        <Col md={12} xs={12} className="text-cneter mt-5">
          <Alert variant="success">
            <Alert.Heading>
              We Get Your Payment. Thank You For Shopping.
            </Alert.Heading>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;
