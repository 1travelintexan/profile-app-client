import React, { useState } from 'react';

function Login({ onLogin }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    let value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(user);
  };

  return (
    <div className="form-page">
      <form onSubmit={handleLogin} className="signup-card">
        <div className="signup-form">
          <h2>Login</h2>
          <label>Username</label>
          <input type="text" name="username" onChange={handleInput} />
          <label>Password</label>
          <input type="password" name="password" onChange={handleInput} />
        </div>
        <div className="hello-div">
          <h3>Hello!</h3>
          <h4>Awesome to have you at IronProfile again!</h4>
          <h6>
            If you signup and agree to our terms, we can do whatever we want
            with your data!
          </h6>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
