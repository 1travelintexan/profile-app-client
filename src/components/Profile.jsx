import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const refreshPage = async () => {
      await authenticateUser();
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
        <h3>Add your pets here:</h3>
        <Button onClick={handleAddPet} variant="outline-success">
          Add Pet
        </Button>
      </div>
    </div>
  );
}

export default Profile;
