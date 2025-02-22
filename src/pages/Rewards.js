import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './Rewards.css'; // Import the CSS file

const rewards = [
  {
    title: 'Free Dessert',
    description: 'Get a free dessert with every order above ₹500.',
    image: 'https://paradise-own-app.s3.amazonaws.com/600x350_4.jpg',
  },
  {
    title: '50% Off',
    description: 'Enjoy 50% off on your next order.',
    image: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg',
  },
  {
    title: 'Buy 1 Get 1 Free',
    description: 'Buy one meal and get another one for free.',
    image: 'https://blog.saginfotech.com/wp-content/uploads/2017/08/buy-one-get-one-stop.jpg',
  },
];

const Rewards = () => {
  return (
    <Grid container spacing={3}>
      {rewards.map((reward, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="reward-card"> {/* Add class name */}
            <CardMedia
              component="img"
              height="150"
              image={reward.image}
              alt={reward.title}
              className="card-media"
            />
            <CardContent className="card-content">
              <Typography gutterBottom variant="h5" component="div">
                {reward.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {reward.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Rewards;
