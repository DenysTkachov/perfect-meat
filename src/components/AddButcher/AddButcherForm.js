import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authSlice';

const AddButcherForm = () => {
  const [butcherName, setButcherName] = useState('');
  const dispatch = useDispatch();

  const handleAddButcher = () => {
    const newButcher = { id: Date.now(), name: butcherName, role: 'butcher' };
    dispatch(registerUser(newButcher));
    setButcherName('');
  };

  return (
    <div>
      <h2>Add Butcher</h2>
      <input
        type="text"
        value={butcherName}
        onChange={(e) => setButcherName(e.target.value)}
        placeholder="Butcher Name"
      />
      <button onClick={handleAddButcher}>Add Butcher</button>
    </div>
  );
};

export default AddButcherForm;