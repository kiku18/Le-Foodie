import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ReviewCard.css';

const ReviewCard = ({ pic, reviewer, recipeName, rating, comment, time }) => {
  return (
    <Card className="review-card">
      <CardContent className="review-card-content">
        <Box className="review-header">
        <Avatar src={pic} alt={reviewer} className="review-avatar" onError={(e) => console.log('Image load error', e)} />
          <Box display="flex" flexDirection="column">
            <Typography variant="body2">{reviewer} reviewed {recipeName}</Typography>
            <Box display="flex" alignItems="center">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} style={{ color: index < rating ? '#FFD700' : '#E0E0E0' }} />
              ))}
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" className="comment">{comment}</Typography>
        <Box className="card-footer">
          <Typography variant="body2">{time}</Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2">Reply</Typography>
            <FavoriteBorderIcon style={{ marginLeft: '8px', color: '#FF69B4' }} /> {/* More visible pink */}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
