import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const { user } = useAuth();

  const handlePurches = () => {
    const order = {
      cus_name: user?.displayName,
      cus_email: user?.email,
      product_name: product.name,
      product_price: product.price,
      product_code: product.code,
      product_image: product.productImage,
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
    <Container>
      <Row>
        <Col
          md={6}
          xs={12}
          className="rounded shadow mt-3 p-5 me-4"
          style={{ width: 500 }}
        >
          <div className="fluid">
            <div className="fluid__image-container">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `data:image/png;base64, ${product.productImage}`,
                  },
                  largeImage: {
                    src: `data:image/png;base64, ${product.productImage}`,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="mt-5 ms-4">
          <h3 style={{ fontSize: 25 }}>realme C25Y - (4GB Ram /64GB Rom)</h3>
          <p>
            <span style={{ color: "#878787" }}>Brand :</span> Realme
          </p>
          <h3 className="text-danger mb-4">
            {product.price} <span style={{ fontSize: 35 }}>&#2547;</span>
          </h3>
          <Col className="mb-3">
            <Button onClick={handlePurches} variant="warning">
              Buy Now
            </Button>
          </Col>
        </Col>
      </Row>
      {/* Products details */}
      <Row>
        <h2 className="mt-4">{product.name}</h2>
        <Col xs={12} md={5}>
          <p className="mt-4">{product.discription}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
