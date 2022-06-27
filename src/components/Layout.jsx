import React from 'react';

function Layout({ children }) {
  return (
    <>
      <div>Navbar</div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  );
}

export default Layout;
