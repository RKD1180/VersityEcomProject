import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { DrawerNavigation } from "react-bootstrap-drawer";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Sidbar = () => {
  return (
    <Container fluid>
      <Row>
        <DrawerNavigation className="shadow text-center pb-5 pt-4">
          {/* Standard react-bootstrap Nav.Item / Nav.Link */}
          {/* Caveat: CSS provides custom styles */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                <Button variant="outline-dark" className="w-50">
                  Home
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/addproduct">
                <Button variant="outline-dark" className="w-50">
                  Add Product
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allorders">
                <Button variant="outline-dark" className="w-50">
                  Orders
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/myorder">
                <Button variant="outline-dark" className="w-50">
                  My Order
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/makeadmin">
                <Button variant="outline-dark" className="w-50">
                  Make Admin
                </Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </DrawerNavigation>
      </Row>
    </Container>
  );
};

export default Sidbar;
