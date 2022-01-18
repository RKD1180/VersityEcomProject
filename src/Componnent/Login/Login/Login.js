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

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    user,
    isLoading,
    authError,
    loginUser,
    signInWithGoole,
    resetPassowrd,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGooleSignIn = () => {
    signInWithGoole(location, navigate);
  };

  const handleReset = () => {
    resetPassowrd(loginData.email);
    alert("Check Your Email For Reset Password");
  };
  return (
    <Container className="shadow mt-4 rounded">
      <Row>
        <Col md={6} xs={12} className="p-5 ">
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              LOGIN
            </Button>

            <Button onClick={handleGooleSignIn} variant="outline-light ms-3">
              <img src={google} height={50} alt="" />
            </Button>
          </Form>
          {isLoading && <Spinner animation="border" variant="success" />}
          {user?.email && <Alert variant="success">Login Successful</Alert>}
          {authError && <Alert variant="danger">{authError}</Alert>}
          <Button variant="outline-danger" onClick={handleReset}>
            <p>Forgot Password?</p>
          </Button>
          <h6 className="mt-3">
            New User{" "}
            <Link to="/registration">
              <span>Registration</span>
            </Link>{" "}
            Please
          </h6>
        </Col>
        <Col md={6} xs={12}>
          <img src={back} height={400} width={400} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
