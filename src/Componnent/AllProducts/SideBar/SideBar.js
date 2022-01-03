import React from "react";
import { Button, Nav } from "react-bootstrap";
import {
  DrawerNavigation,
  DrawerNavigationHeader,
} from "react-bootstrap-drawer";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <DrawerNavigation className="shadow text-center pb-5 pt-4">
        <DrawerNavigationHeader>
          <h2 className="text-black">Brand Name</h2>
        </DrawerNavigationHeader>
        {/* Standard react-bootstrap Nav.Item / Nav.Link */}
        {/* Caveat: CSS provides custom styles */}
        <Nav.Item>
          <Nav.Link>
            <Link to="/">
              <Button variant="outline-dark" className="w-50">
                SAMSUNG
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/addproduct">
              <Button variant="outline-dark" className="w-50">
                XIAOMI
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/allorders">
              <Button variant="outline-dark" className="w-50">
                OPPO
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/myorder">
              <Button variant="outline-dark" className="w-50">
                LENOVO
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/makeadmin">
              <Button variant="outline-dark" className="w-50">
                NOKIA
              </Button>
            </Link>
          </Nav.Link>
        </Nav.Item>
      </DrawerNavigation>
    </>
  );
};

export default SideBar;
