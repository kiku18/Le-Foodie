import React from 'react';
import { Box, Typography } from '@mui/material';
import './CircularCard.css';

const CircularCard = ({ title, image }) => {
  return (
    <Box className="circular-card-container">
      <Box className="circular-card">
        <img src={image} alt={title} className="circular-card-media" />
      </Box>
      <Typography variant="b6" className="circular-card-title">{title}</Typography>
    </Box>
  );
};

export default CircularCard;
