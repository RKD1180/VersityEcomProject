import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ElectroShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">
                <Button variant="outline-light">Home</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">
                <Button variant="outline-light">About</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allproducts">
                <Button variant="outline-light">All Products</Button>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {user?.email ? (
              <>
                <Nav.Link>
                  <Link
                    to="/dashboard"
                    className="text-decoration-none text-white pt-5"
                  >
                    Dashboard
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Button onClick={logOut} variant="outline-danger">
                    Log Out
                  </Button>
                </Nav.Link>
                <p className="text-white mt-2">{user.displayName}</p>
              </>
            ) : (
              <Nav.Link>
                <Link to="/login" className="text-decoration-none text-white">
                  <Button variant="outline-success">Login</Button>
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
