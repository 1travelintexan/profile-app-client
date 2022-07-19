import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
