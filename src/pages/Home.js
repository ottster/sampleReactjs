//The Home component fetches the list of users from the GitHub API using the fetchUsers function from the githubApi.js service, and then displays the list of users using the UserList component.

//When a user is clicked, the handleUserClick function is called, which uses the history object to navigate to the user detail page, passing the selected username as a parameter.

import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { fetchUsers } from '../services/githubApi'; // You'd need to implement this function
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch users from the GitHub API
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = username => {
    // Navigate to the user detail page when a user is clicked
    navigate(`/user/${username}`);
  };

  return (
    <div>
      <h1 className="user-list-header">Ott Maiwat's GitHub Users List</h1>
      <UserList users={users} onUserClick={handleUserClick} />
    </div>
  );
};

export default Home;
