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
      <DrawerNavigation
        style={{ position: "fixed", width: "20rem" }}
        fixed="top"
        className="shadow text-center pb-5 pt-4 rounded mb-5"
      >
        <DrawerNavigationHeader>
          <h2 className="text-black">Brand Name</h2>
        </DrawerNavigationHeader>
        {/* Standard react-bootstrap Nav.Item / Nav.Link */}
        {/* Caveat: CSS provides custom styles */}
        <Nav.Item>
          <Nav.Link>
            <Link to="/samsung">
              <Button variant="outline-dark" className="w-50">
                SAMSUNG
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/xiaomi">
              <Button variant="outline-dark" className="w-50">
                XIAOMI
              </Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/realme">
              <Button variant="outline-dark" className="w-50">
                Realme
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
