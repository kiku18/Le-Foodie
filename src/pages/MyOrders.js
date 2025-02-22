import React from 'react';
import { Container, Box, Typography, Button, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { useCart } from '../context/CartContext'; // Ensure correct import path
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './MyOrders.css'; // Import the CSS file

const MyOrders = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <Container className="container">
      <Typography variant="h4" className="heading" gutterBottom>My Orders</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <div>
          <div className="cards-container">
            {cartItems.map((item) => (
              <Box key={item.id} className="card-wrapper" mb={2}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={item.title}
                      height="140"
                      image={item.url} // Ensure the item object contains the 'url' property
                      title={item.title}
                    />
                    <CardContent className="card-content">
                      <Typography variant="h6" component="h3">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Price: ${item.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Quantity: {item.quantity}
                      </Typography>
                      <Button variant="outlined" className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </div>
          <Typography variant="h6" className="total-price" gutterBottom>Total: ${getTotalPrice().toFixed(2)}</Typography>
          <Button
            variant="contained"
            className="checkout-button"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default MyOrders;
