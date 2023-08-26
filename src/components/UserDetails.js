//The UserDetails component is used to display the user's avatar, username, and follower count, and can be reused across both the Home and User Detail pages.

import React from 'react';
import '../styles/UserDetails.css'; // Import the CSS file

const UserDetails = ({ user }) => {
  return (
    <div className="user-details-container">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="user-avatar-large" />
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <p>
          <span>Followers:</span> {user.followers}
        </p>
        {/* Add more user information here if needed */}
      </div>
    </div>
  );
};

export default UserDetails;

