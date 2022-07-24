import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
  const { user, authenticateUser, pets, fetchPets } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const getProfileInfo = async () => {
      await authenticateUser();
      await fetchPets();
    };
    getProfileInfo();
  }, []);

  const handleAddPet = () => {
    navigate('/add-pet');
  };
  console.log(user, pets);
  if (user === null) {
    console.log('inside if');
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user && <h1>Welcome! {user.username} to your profile</h1>}
      <div>
        <div>
          <h2>Your Pets:</h2>
          {pets &&
            pets.map((elem, i) => {
              return (
                <div key={elem.name + i}>
                  <img src={elem.petImage} alt="Your cute Pet" />
                  <h3>{elem.name}</h3>
                </div>
              );
            })}
        </div>
        <h3>Update your profile info:</h3>
        <Button variant="outline-success">
          <Link to="/profile-update">Update Profile</Link>
        </Button>
        <h3>Add your pets here:</h3>
        <Button onClick={handleAddPet} variant="outline-success">
          Add Pet
        </Button>
      </div>
    </div>
  );
}

export default Profile;
