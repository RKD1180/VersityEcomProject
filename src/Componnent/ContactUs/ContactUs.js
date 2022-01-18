import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xlezdydb");
  if (state.succeeded) {
    return (
      <>
        <Alert variant="success" className="mx-auto w-50 mt-5">
          <Alert.Heading>Form ElectroShop </Alert.Heading>
          <p>Thank You For Contact with us. we will contact with you soon.</p>
        </Alert>
      </>
    );
  }
  return (
    <Container className="mt-5 ">
      <Row>
        <Col xs={12} md={6} className="mx-auto shadow p-5 rounded">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                id="phone"
                name="phonenumber"
                type="number"
                placeholder="0177777777"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter Your Query</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
