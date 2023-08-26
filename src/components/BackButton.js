import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const BackButton = () => {
  const navigatBack = useNavigate()

  const handleGoBack = () => {
    navigatBack(-1); // Navigate back to the previous page
  };

  return (
    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5, ml: 0, mt: 3 }} onClick={handleGoBack}>
      Back
    </Button>
  );
};

export default BackButton;
