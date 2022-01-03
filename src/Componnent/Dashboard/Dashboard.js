import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidbar from "./Sidebar/Sidbar";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} xs={12}>
          <Sidbar></Sidbar>
        </Col>
        <Col md={8} xs={12}></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
