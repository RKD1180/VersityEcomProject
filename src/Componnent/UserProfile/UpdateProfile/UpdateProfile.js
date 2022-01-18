import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const UpdateProfile = ({ showProfile, handleProfileClose }) => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({});
  const handleonChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...profileData };
    newInfo[field] = value;
    setProfileData(newInfo);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/userprofile`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Profile Add SuccessFully");
        }
      });
  };
  return (
    <>
      <Modal show={showProfile} onHide={handleProfileClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Profile Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Form onSubmit={handleProfileSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Account Mail</Form.Label>
                <p>Your Account Mail Is : {user.email}</p>
                <Form.Control
                  type="email"
                  name="accountMail"
                  onChange={handleonChange}
                  placeholder="Enter Account Mail"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleonChange}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  onChange={handleonChange}
                  placeholder="Enter Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleonChange}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  onChange={handleonChange}
                  placeholder="Enter Number"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleProfileClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateProfile;
