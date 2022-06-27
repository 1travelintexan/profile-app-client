import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div>Profile</div>
      {user && <h1>Welcome! {user.username}</h1>}
    </>
  );
}

export default Profile;
