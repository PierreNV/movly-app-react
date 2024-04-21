import React from "react";

const Profile = ({ user }) => {
  return (
    <>
      <h1 className="h3 mb-5 fw-normal">Your profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Profile;
