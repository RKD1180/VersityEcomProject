import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import Sidbar from "./Sidebar/Sidbar";
import useAuth from "./../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const url = `https://mighty-fjord-16205.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://mighty-fjord-16205.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          handleShow();
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
        }
      });
  };

  const filterProduct = orders.filter(
    (order) => order.cus_email === user.email
  );

  return (
    <Container fluid>
      <Row>
        <Col md={3} xs={12}>
          <Sidbar></Sidbar>
        </Col>
        <Col md={9} xs={12} className="mt-3">
          <h2 className="text-center">My Orders</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Trans Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterProduct.map((order) => (
                <tr>
                  <td>{order.product_name}</td>
                  <td>{order.total_amount}</td>
                  <td>{order.cus_name}</td>
                  <td>{order.cus_email}</td>
                  <td>{order.tran_id}</td>
                  <td>
                    <Button
                      onClick={() => handleDelete(order._id)}
                      variant="warning"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Alert variant="success">
              <Alert.Heading>Product Delete Successfully</Alert.Heading>
            </Alert>
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

export default Dashboard;
