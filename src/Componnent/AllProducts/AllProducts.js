import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import SideBar from "./SideBar/SideBar";

const AllProducts = () => {
  return (
    <Container className="" fluid>
      <Row>
        <Col className="" md={3} xs={12}>
          <SideBar></SideBar>
        </Col>
        <Col md={8} xs={12} className="mt-5">
          <Product></Product>
        </Col>
      </Row>
    </Container>
  );
};

export default AllProducts;
