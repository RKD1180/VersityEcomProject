import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ProfileData from "./ProfileData/ProfileData";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import useAuth from "./../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClose = () => setShowProfile(false);
  const handleProfileShow = () => setShowProfile(true);

  const filterEmail = profileData.filter(
    (usersEmail) => usersEmail.accountMail === user.email
  );

  useEffect(() => {
    const url = `https://mighty-fjord-16205.herokuapp.com/userprofiledata`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }, [profileData.length]);

  return (
    <Container className="mt-5">
      <Col className="d-flex ">
        <h2>User Profile</h2>
        <Button className="ms-4" onClick={handleProfileShow} variant="warning">
          Add Profile
        </Button>
      </Col>
      <Row>
        {filterEmail.map((data) => (
          <ProfileData key={data._id} data={data}></ProfileData>
        ))}
      </Row>
      <UpdateProfile
        showProfile={showProfile}
        handleProfileClose={handleProfileClose}
      ></UpdateProfile>
    </Container>
  );
};

export default UserProfile;
