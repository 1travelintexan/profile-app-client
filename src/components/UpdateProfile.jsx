import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import { AuthContext } from '../context/auth.context';

function UpdateProfile({ onUpdateProfile }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        // let userDB = await fetch(`${API_URL}/auth/current-user`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'user._id': user._id,
        //   },
        // });
        //await userDB.json();
        setCurrentUser(user);
      } catch (err) {
        console.log(err);
        navigate('/profile');
      }
    };
    fetchCurrentUser();
  }, []);

  const handleInput = (e) => {
    let value = e.target.value;
    setCurrentUser({ ...currentUser, [e.target.name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('current usr', currentUser);
    const profileImage = e.target.profileImage.files[0];
    let profileFormData = new FormData();
    profileFormData.append('profileImage', profileImage);
    profileFormData.append('username', currentUser.username);
    profileFormData.append('breed', currentUser.campus);
    profileFormData.append('age', currentUser.course);
    profileFormData.append('_id', currentUser._id);
    onUpdateProfile(profileFormData);
  };

  if (!currentUser) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="form-page">
        <form onSubmit={handleUpdate} className="signup-card">
          <div className="signup-form">
            <h2>Your Current User Info:</h2>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={currentUser.username}
              onChange={handleInput}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={currentUser.password}
              placeholder="*******"
              onChange={handleInput}
            />
            <label>Campus</label>
            <input
              type="text"
              name="campus"
              value={currentUser.campus}
              onChange={handleInput}
            />
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={currentUser.course}
              onChange={handleInput}
            />
            <label>Profile Image:</label>
            <input
              type="file"
              name="profileImage"
              accept="image/jpeg, image/png"
            />
          </div>
          <div className="hello-div">
            <h3>Welcome!!!</h3>
            <h4>
              We understand that sometimes you need to update your information
            </h4>
            <h6>
              Feel free to re-submit all of your information for security
              reasons
            </h6>
            <button type="submit">Update Your Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
