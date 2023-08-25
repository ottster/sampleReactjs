//the fetchUsers and fetchUserDetail functions handle potential errors by using try/catch blocks. If the API request returns a non-ok status code (e.g., 404 for not found), the functions throw custom errors. These errors can then be caught and displayed in the UI to provide feedback to the user.

const BASE_URL = 'https://api.github.com';

// Function to fetch users from GitHub API
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Function to fetch user details from GitHub API
export const fetchUserDetail = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('User not found');
  }
};
