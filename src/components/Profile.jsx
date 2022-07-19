import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Profile() {
  const { user } = useContext(AuthContext);
  return <>{user && <h1>Welcome! {user.username} to your profile</h1>}</>;
}

export default Profile;
