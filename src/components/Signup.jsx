import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    campus: '',
    course: '',
  });

  const handleInput = (e) => {
    let value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    onSignup(user);
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSignup} className="signup-card">
        <div className="signup-form">
          <h2>Signin</h2>
          <label>Username</label>
          <input type="text" name="username" onChange={handleInput} />
          <label>Password</label>
          <input type="password" name="password" onChange={handleInput} />
          <label>Campus</label>
          <input type="text" name="campus" onChange={handleInput} />
          <label>Course</label>
          <input type="text" name="course" onChange={handleInput} />
        </div>
        <div className="hello-div">
          <h3>Hello!</h3>
          <h4>Welcome to IronProfile!</h4>
          <h6>
            If you signup and agree to our terms, we can do whatever we want
            with your data!
          </h6>
          <button type="submit">Create the Account</button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
