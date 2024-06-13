import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, registerUser } from '../../redux/auth/authSlice';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.role);

  const handleRegister = () => {
    const newUser = { id: Date.now(), name: username, password, role };
    dispatch(registerUser(newUser));
    setUsername('');
    setPassword('');
    setRole('');
  };

  if (userRole !== 'chief') {
    return <div>Only Chief can register new users.</div>;
  }

  return (
    <div>
      <h2>Register</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="weigher">Weigher</option>
        <option value="butcher">Butcher</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;