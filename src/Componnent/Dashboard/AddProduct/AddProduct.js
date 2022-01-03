import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Sidbar from "./../Sidebar/Sidbar";

const AddProduct = () => {
  const [productNumber, setProductNumber] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [productInfo, setProductInfo] = useState({});

  const productCode = () => {
    const min = 10000;
    const max = 1000000;
    const random = min + Math.random() * (max * min);
    setProductNumber(parseInt(random));
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productInfo };
    newInfo[field] = value;
    setProductInfo(newInfo);
  };

  const handleProduct = (e) => {
    const { productName, productPrice, productDiscription } = productInfo;
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productDiscription", productDiscription);
    formData.append("productImage", productImage);
    formData.append("productNumber", productNumber);

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} xs={12} className="me-5">
          <Sidbar></Sidbar>
        </Col>
        <Col md={7} xs={12} className="mt-5">
          <Form className="w-75" onSubmit={handleProduct}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Product Name"
                onBlur={handleOnBlur}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="number"
                value={productNumber}
                onClick={productCode}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                placeholder="Price"
                onBlur={handleOnBlur}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Product Discription</Form.Label>
              <Form.Control
                as="textarea"
                name="productDiscription"
                onBlur={handleOnBlur}
                rows={3}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setProductImage(e.target.files[0])}
                name="productImage"
                accept="image/*"
              />
            </Form.Group>

            <Button variant="warning" type="submit">
              Add Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
