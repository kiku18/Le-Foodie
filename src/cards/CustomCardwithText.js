import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import './CustomCardwithText.css';

const CustomCardwithText = ({ title, image, description }) => {
  return (
    <Card className="custom-card-with-text">
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
        className="custom-card-media"
      />
      <Box className="overlay">
        <Typography variant="h6" className="overlay-title">{title}</Typography>
        <Typography variant="body2" className="overlay-description">{description}</Typography>
      </Box>
    </Card>
  );
};

export default CustomCardwithText;
