import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, authenticateUser, pets, fetchPets } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const refreshPage = async () => {
      await authenticateUser();
      fetchPets();
    };
    refreshPage();
  }, []);

  const handleAddPet = () => {
    navigate('/add-pet');
  };
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
        <h3>Add your pets here:</h3>
        <Button onClick={handleAddPet} variant="outline-success">
          Add Pet
        </Button>
      </div>
    </div>
  );
}

export default Profile;
