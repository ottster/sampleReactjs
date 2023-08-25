//the UserDetail component fetches the user's details from the GitHub API using the fetchUserDetail function (which you'd need to implement). The useEffect hook takes care of fetching the data when the component mounts or when the username parameter changes.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { fetchUserDetail } from '../services/githubApi'; // You'd need to implement this function
import BackButton from '../components/BackButton'; // Import the BackButton component

const UserDetail = () => {
  const { username } = useParams();
  const [userDetail, setUserDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user details from the GitHub API
    fetchUserDetail(username)
      .then(data => setUserDetail(data))
      .catch(error => setError(error.message));
  }, [username]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : userDetail ? (
        <div>
          <h1>Ott Maiwat's User Detail</h1>
          <UserDetails user={userDetail} />
          <BackButton />
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetail;

//the error state is used to store any error messages that occur during API requests. If an error occurs, the error message is displayed in the UI. This provides a user-friendly way to handle error cases and communicate issues to the user.