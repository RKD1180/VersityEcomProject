import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Product.css";
import useAuth from "./../../hooks/useAuth";

const Product = (props) => {
  const { user } = useAuth();
  const { name, price, discription, productImage, _id, code } = props.product;

  const handlePurches = () => {
    const order = {
      cus_name: user?.displayName,
      cus_email: user?.email,
      product_name: name,
      product_price: price,
      product_code: code,
      product_image: productImage,
    };
    const url = `http://localhost:5000/init`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data);
      });
  };

  return (
    <>
      <Col>
        <Card style={{ height: 500 }} className="product">
          <Card.Img
            variant="top"
            src={`data:image/png;base64, ${productImage}`}
            style={{ height: 250, width: 250 }}
          />
          <Card.Body>
            <Card.Title>{name.slice(0, 30)}</Card.Title>
            <Card.Text>{discription.slice(0, 50)}</Card.Text>
            <Card.Text className="fw-bold text-danger">
              Price: {price}{" "}
              <span style={{ fontSize: 20 }} className="fw-bold">
                &#2547;
              </span>
            </Card.Text>
            <Col className="mb-3">
              <Button onClick={handlePurches} variant="warning">
                Buy Now
              </Button>

              <Link to={`/productsDetails/${_id}`}>
                <Button variant="success" className="ms-3 ">
                  Details
                </Button>
              </Link>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
