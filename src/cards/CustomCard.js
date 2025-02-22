import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './CustomCard.css';

const CustomCard = ({ title, image, description }) => {
  return (
    <Card className="custom-card">
      <CardMedia
        component="img"
        height="190"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="b6" gutterBottom>{title}</Typography>
       {/* <Typography variant="body2" color="text.secondary">{description}</Typography>*/}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
