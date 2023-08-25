// the users.map function iterates through the array of user objects, rendering each user's avatar and username within a li element. The onClick handler is set on each li element to call the onUserClick callback when a user is clicked, which triggers navigation to the user detail page.

import React from 'react';
import '../styles/UserList.css'; // Import the CSS file

const UserList = ({ users, onUserClick }) => {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id} className="user-list-item" onClick={() => onUserClick(user.login)}>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="user-avatar" />
          <span className="user-username">{user.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

