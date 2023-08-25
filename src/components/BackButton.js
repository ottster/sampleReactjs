import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigatBack = useNavigate()

  const handleGoBack = () => {
   navigatBack(-1); // Navigate back to the previous page
  };

  return (
    <button onClick={handleGoBack} className="back-button">
      Back
    </button>
  );
};

export default BackButton;
