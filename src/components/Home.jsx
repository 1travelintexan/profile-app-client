import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-content-div">
        <h1>IronProfile</h1>
        <h3>
          Today we will create an app with authorization, adding some cool
          styles!
        </h3>
        <div className="home-btns-div">
          <Link className="home-btn" to="/signup">
            Signup
          </Link>
          <Link className="home-btn" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
