import React from 'react';
import { useSelector } from 'react-redux';

const StatisticsPage = () => {
  const users = useSelector((state) => state.auth.users);

  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsPage;
