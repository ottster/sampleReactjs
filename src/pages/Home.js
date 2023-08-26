//The Home component fetches the list of users from the GitHub API using the fetchUsers function from the githubApi.js service, and then displays the list of users using the UserList component.

//When a user is clicked, the handleUserClick function is called, which uses the history object to navigate to the user detail page, passing the selected username as a parameter.

import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserList from '../components/UserList';
import { fetchUsers } from '../services/githubApi'; // You'd need to implement this function
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

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
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth={{ xs: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}>
          <Typography variant="h2" component="h1" gutterBottom>
          List of GitHub Users by Ott Maiwat
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'This ReactJS application leverages the public GitHub API to seamlessly showcase GitHub users. The application provides a user list, displaying each user`s avatar and username. '}
            {'Users can conveniently click on a username to navigate to a detailed page containing more information about that specific user.'}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic'}}>This project serves as a testament to my practical programming skills applied in a real-world scenario.</Typography>
          <UserList users={users} onUserClick={handleUserClick} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
