import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h1>Meat Processing Tracker</h1>
      {user ? (
        <div>
          <span>{user.name} ({role})</span>
          <button onClick={handleLogout}>Logout</button>
          {role === 'chief' && <Link to="/register">Register</Link>}
          <Link to="/dashboard">Dashboard</Link>
          {role === 'chief' && <Link to="/statistics">Statistics</Link>}
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;