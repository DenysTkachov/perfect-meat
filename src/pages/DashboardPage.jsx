import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/auth/authSlice';

const DashboardPage = () => {
  const [butcherName, setButcherName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const userRole = useSelector((state) => state.auth.role);

  const handleAddButcher = () => {
    const newButcher = { id: Date.now(), name: butcherName, role: 'butcher' };
    dispatch(registerUser(newButcher));
    setButcherName('');
  };

  const filteredUsers = userRole === 'chief' 
    ? users 
    : users.filter(user => user.role === 'butcher');

  return (
    <div>
      <h1>Dashboard</h1>
      {userRole === 'chief' && (
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
      )}
      <h2>Users</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
