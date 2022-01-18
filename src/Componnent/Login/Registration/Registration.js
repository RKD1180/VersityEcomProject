import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import google from "../../../img/g.png";
import back from "../../../img/back.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({});
  const { user, registerUser, isLoading, authError, signInWithGoole } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegistrationData = { ...registrationData };
    newRegistrationData[field] = value;
    setRegistrationData(newRegistrationData);
  };

  const handleOnSubmit = (e) => {
    alert("Registration Data Submit");

    console.log(registrationData.name);
    registerUser(
      registrationData.email,
      registrationData.password,
      registrationData.name,
      location,
      navigate
    );
    e.preventDefault();
  };

  const handleGooleSignIn = () => {
    signInWithGoole(location, navigate);
  };

  return (
    <Container className="shadow mt-4 rounded">
      <Row>
        <Col md={6} xs={12} className="p-5 ">
          {!isLoading && (
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleRegistration}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleRegistration}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleRegistration}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                REGISTER
              </Button>

              <Button onClick={handleGooleSignIn} variant="outline-light">
                <img src={google} height={50} alt="" />
              </Button>
            </Form>
          )}
          {isLoading && <Spinner animation="border" variant="success" />}
          {user?.email && (
            <Alert variant="success">Please Check Your Email For Verify</Alert>
          )}
          {authError && <Alert variant="danger">{authError}</Alert>}
          <h6 className="mt-3">
            Exsisting User{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>{" "}
            Please
          </h6>
        </Col>
        <Col md={6} xs={12}>
          <img src={back} width={400} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
