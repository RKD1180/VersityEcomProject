import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SliderProducts.css";
import useAuth from "./../../../hooks/useAuth";

const SliderProduct = (props) => {
  const { user } = useAuth();
  const { name, price, productImage, code, _id } = props.product;

  const handlePurches = () => {
    const order = {
      cus_name: user?.displayName,
      cus_email: user?.email,
      product_name: name,
      product_price: price,
      product_code: code,
    };
    const url = `https://mighty-fjord-16205.herokuapp.com/init`;
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
    <Col>
      <Card style={{ height: 330, width: 300 }} className="product">
        <Card.Img
          variant="top"
          src={`data:image/png;base64, ${productImage}`}
          style={{ height: 150, width: 250 }}
          className="mx-auto"
        />
        <Card.Body>
          <Card.Title>{name.slice(0, 30)}</Card.Title>

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
  );
};

export default SliderProduct;
