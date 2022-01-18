import React from "react";
import { Col } from "react-bootstrap";

const ProfileData = (props) => {
  const { name, address, phone, email } = props.data;

  return (
    <>
      <Col md={5} xs={12} className="shadow p-4 mt-3 d-flex ms-2 me-2">
        <Col>
          <h3>Name: {name}</h3>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>Email:{email}</p>
        </Col>
      </Col>
    </>
  );
};

export default ProfileData;
