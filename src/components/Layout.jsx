import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import Navbar from './Navbar';

function Layout({ children }) {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const verifyUser = async () => {
      await authenticateUser();
      if (!isLoggedIn) {
        navigate('/');
      }
    };
    verifyUser();
  });

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div>Footer</div>
    </>
  );
}

export default Layout;
