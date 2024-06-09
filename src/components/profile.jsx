import React from "react";

const Profile = ({ user }) => {
  return (
    <>
      <h1 className="h3 mb-5 fw-normal">Your profile</h1>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <form className="col-sm-5 m-auto">
        <input name="username" aria-label="username" type="text" autoComplete="username" autoFocus />
        <button aria-label="Register" onClick={SubmitEvent}>
          send
        </button>
        <div className="mb-3">
          <a href="/login">Already registered?</a>
        </div>
      </form>
    </>
  );
};

export default Profile;
