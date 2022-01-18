import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Modal,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import Sidbar from "../Sidebar/Sidbar";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/products/`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          handleShow();
          const remainingproducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingproducts);
        }
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className="">
          <Sidbar></Sidbar>
        </Col>
        <Col xs={12} md={9} className="mt-5">
          {products.length === 0 ? (
            <Col class="d-flex justify-content-center ">
              <Spinner animation="border" variant="warning" />
            </Col>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Img</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Code</th>
                  <th>Brand</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td>
                      <img
                        src={`data:image/png;base64, ${product.productImage}`}
                        height={50}
                        width={50}
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.code}</td>
                    <td>{product.brand}</td>
                    <td>
                      <Button
                        onClick={() => handleDelete(product._id)}
                        variant="warning"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Alert variant="success">Product Delete Successfully</Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default ManageAllProducts;
