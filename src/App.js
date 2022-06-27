import './App.css';
import { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { API_URL } from './config';
import Profile from './components/Profile';
import { AuthContext } from './context/auth.context';
import Layout from './components/Layout';

function App() {
  const { isLoggedIn, user, storeToken } = useContext(AuthContext);
  const navigate = useNavigate();

  //signup function with fetch
  const handleSignup = async (user) => {
    try {
      let newUser = await fetch(`${API_URL}/auth/signup`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const newUserDB = await newUser.json();
      console.log('here is your new user', newUserDB);
      navigate('/login');
    } catch (err) {
      console.log(err);
      navigate('/');
    }
  };

  const handleLogin = async (user) => {
    try {
      const loggedInUser = await fetch(`${API_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const loggedInUserDB = await loggedInUser.json();

      //get token from server response
      const token = loggedInUserDB.authToken;

      storeToken(token);
      navigate('/profile');
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
