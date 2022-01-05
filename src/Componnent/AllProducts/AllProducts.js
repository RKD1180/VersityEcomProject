import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";
import SideBar from "./SideBar/SideBar";

const AllProducts = () => {
  const [getProducts, setProducts] = useState([]);
  let products = [];
  for (let i = getProducts.length - 1; i >= 0; i--) {
    products.push(getProducts[i]);
  }

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container className="" fluid>
      <Row>
        <Col className="" md={3} xs={12}>
          <SideBar></SideBar>
        </Col>
        <Col md={8} xs={12} className="mt-5">
          {products.length === 0 ? (
            <Spinner animation="border" variant="warning" />
          ) : (
            <Row xs={12} md={3} className="g-4">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AllProducts;
