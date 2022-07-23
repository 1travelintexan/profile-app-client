import 'bootstrap/dist/css/bootstrap.min.css';
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
import AddPet from './components/AddPet';
import axios from 'axios';
import UpdateProfile from './components/UpdateProfile';

function App() {
  const { storeToken, user, isLoggedIn } = useContext(AuthContext);
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
      await newUser.json();
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

  const handleAddPet = async (pet) => {
    console.log('pet to create client', pet);
    if (isLoggedIn) {
      try {
        console.log('pet with user', pet);
        let createdPet = await axios.post(`${API_URL}/auth/create-pet`, pet);
        // await fetch(`${API_URL}/auth/create-pet`, {
        //   method: 'post',
        //   headers: {
        //     'content-type': 'application/json',
        //   },
        //   body: JSON.stringify(pet),
        // });
        console.log('here is the new pet', createdPet);
        navigate('/profile');
      } catch (err) {
        console.log(err);
        navigate('/profile');
      }
    }
  };

  const handleUpdateProfile = async (userToUpdate) => {
    console.log('here is the user to update', userToUpdate);
    if (isLoggedIn) {
      try {
        let updatedUser = await axios.post(
          `${API_URL}/auth/update-user`,
          userToUpdate
        );

        console.log('here is the new pet', updatedUser);
        navigate('/profile');
      } catch (err) {
        console.log(err);
        navigate('/profile');
      }
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/profile"
          exact
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/add-pet"
          exact
          element={
            <Layout>
              <AddPet onAddPet={handleAddPet} />
            </Layout>
          }
        />
        <Route
          path="/profile-update"
          exact
          element={
            <Layout>
              <UpdateProfile onUpdateProfile={handleUpdateProfile} />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
