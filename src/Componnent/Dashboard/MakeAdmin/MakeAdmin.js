import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Sidbar from "./../Sidebar/Sidbar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = { email };

    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Admin Make Successfully");
      });
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className="me-5">
          <Sidbar></Sidbar>
        </Col>
        <Col xs={12} md={8} className="mt-5">
          <Form onSubmit={handleOnSubmit} className="w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Admin Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
