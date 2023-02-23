import React from 'react';
const Profile = ({user}) => {
    return <div className="mb-5">
    <h1 className="h3 mb-5 fw-normal">Your profile</h1>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
</div>;
}
 
export default Profile;