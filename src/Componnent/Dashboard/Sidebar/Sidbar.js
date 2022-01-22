import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { DrawerNavigation } from "react-bootstrap-drawer";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const Sidbar = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState(false);
  useEffect(() => {
    fetch(`https://mighty-fjord-16205.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.admin));
  }, [user.email]);

  return (
    <Container fluid>
      <Row>
        <DrawerNavigation className="shadow text-center pb-5 pt-4 ">
          {/* Standard react-bootstrap Nav.Item / Nav.Link */}
          {/* Caveat: CSS provides custom styles */}
          <Nav.Item>
            {!users ? (
              <>
                <Nav.Link>
                  <Link to={`/dashboard/${user.email}`}>
                    <Button variant="outline-dark" className="w-50">
                      My Order
                    </Button>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/userprofile">
                    <Button variant="outline-dark" className="w-50">
                      Profile
                    </Button>
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link to={`/dashboard/${user.email}`}>
                    <Button variant="outline-dark" className="w-50">
                      My Order
                    </Button>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/userprofile">
                    <Button variant="outline-dark" className="w-50">
                      Profile
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
                  <Link to="/makeadmin">
                    <Button variant="outline-dark" className="w-50">
                      Make Admin
                    </Button>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/manageallproduct">
                    <Button variant="outline-dark" className="w-50">
                      Manage Product
                    </Button>
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav.Item>
        </DrawerNavigation>
      </Row>
    </Container>
  );
};

export default Sidbar;
