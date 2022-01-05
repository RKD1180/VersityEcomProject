import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SliderProducts.css";

const SliderProduct = (props) => {
  const { name, price, productImage } = props.product;
  return (
    <Col>
      <Card style={{ height: 330, width: 300 }} className="product">
        <Card.Img
          variant="top"
          src={`data:image/png;base64, ${productImage}`}
          style={{ height: 150, width: 250 }}
          className="mx-auto"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Card.Text className="fw-bold text-danger">
            Price: {price}{" "}
            <span style={{ fontSize: 20 }} className="fw-bold">
              &#2547;
            </span>
          </Card.Text>
          <Col className="mb-3">
            <Link to="/">
              <Button variant="warning">Buy Now</Button>
            </Link>
            <Link to="/">
              <Button variant="success" className="ms-3 ">
                Details
              </Button>
            </Link>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SliderProduct;
