import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
    </div>
  );
};

export default User;
