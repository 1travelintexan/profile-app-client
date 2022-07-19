import React, { useState } from 'react';

function AddPet({ onAddPet }) {
  const [pet, setPet] = useState({
    name: '',
    breed: '',
    age: 0,
    animalType: '',
    size: '',
  });

  const handleInput = (e) => {
    let value = e.target.value;
    setPet({ ...pet, [e.target.name]: value });
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    onAddPet(pet);
  };
  return (
    <div className="form-page">
      <form onSubmit={handleAddPet} className="signup-card">
        <div className="signup-form">
          <h2>Add your Pet here:</h2>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleInput} />
          <label>Age:</label>
          <input type="number" name="age" onChange={handleInput} />
          <label>Type of Pet:</label>
          <input type="text" name="animalType" onChange={handleInput} />
          <label>Breed:</label>
          <input type="text" name="breed" onChange={handleInput} />
          <label>Size:</label>
          <input type="text" name="size" onChange={handleInput} />
        </div>
        <div className="hello-div">
          <h4>Here, your pets are your family</h4>
          <h6>
            Once you add your pets, you can see other members pets and everyone
            can be friends and have pet dates.
          </h6>
          <button type="submit">Add Pet</button>
        </div>
      </form>
    </div>
  );
}

export default AddPet;
