import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Container, Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button, IconButton, Menu, MenuItem, FormControlLabel, Checkbox, Select, Slider, InputLabel, FormControl, Snackbar, LinearProgress } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Foods from './Foods';
import './PrivateAuthPage.css';

const PrivateAuthPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems } = useCart();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/Sign-In');
    }
  }, [isAuthenticated, navigate]);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [quantity, setQuantity] = useState({});
  const [cuisine, setCuisine] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isAdding, setIsAdding] = useState(true);

  useEffect(() => {
    if (snackbarOpen) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 1 : 0));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [snackbarOpen]);

  const handleDoubleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleQuantityChange = (food, change) => {
    const newQuantity = Math.max(0, (quantity[food.id] || 0) + change);
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [food.id]: newQuantity,
    }));

    if (change > 0) {
      addToCart(food);
      setSnackbarMessage('Item added to cart');
      setIsAdding(true);
    } else if (newQuantity === 0) {
      removeFromCart(food.id);
      setSnackbarMessage('Item removed from cart');
      setIsAdding(false);
    }
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setProgress(100);
  };

  const handleFilterMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCuisineChange = (event) => {
    const value = event.target.value;
    setCuisine((prev) => 
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const filteredFoods = Foods.filter((food) => {
    return (
      (cuisine.length === 0 || cuisine.includes(food.cuisine)) &&
      food.price >= priceRange[0] && food.price <= priceRange[1]
    );
  });

  const sortedFoods = [...filteredFoods].sort((a, b) => {
    if (sort === 'highest') {
      return b.price - a.price;
    } else if (sort === 'lowest') {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
    <Container className="container">
      <Typography variant="h4" component="h2" gutterBottom className="heading">
        New Arrivals
      </Typography>

      <Box className="filter-section">
        <IconButton onClick={handleFilterMenuOpen} aria-label="filter">
          <FilterListIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleFilterMenuClose}
        >
          <MenuItem>
            <FormControlLabel
              control={<Checkbox checked={cuisine.includes('Italian')} onChange={handleCuisineChange} value="Italian" />}
              label="Italian"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={<Checkbox checked={cuisine.includes('French')} onChange={handleCuisineChange} value="French" />}
              label="French"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={<Checkbox checked={cuisine.includes('Deutsch')} onChange={handleCuisineChange} value="Deutsch" />}
              label="Deutsch"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              control={<Checkbox checked={cuisine.includes('English')} onChange={handleCuisineChange} value="English" />}
              label="English"
            />
          </MenuItem>
        </Menu>

        <FormControl variant="outlined" className="sort-filter">
          <InputLabel>Sort by</InputLabel>
          <Select value={sort} onChange={handleSortChange} label="Sort by">
            <MenuItem value="">
              <em>Sort by</em>
            </MenuItem>
            <MenuItem value="highest">Price: Highest to Lowest</MenuItem>
            <MenuItem value="lowest">Price: Lowest to Highest</MenuItem>
          </Select>
        </FormControl>

        <Box width={200} className="price-slider">
          <Typography id="price-slider" gutterBottom>
            Price range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            aria-labelledby="price-slider"
            min={0}
            max={700}
          />
          <Typography variant="body2" align="center">
          ₹ {priceRange[0]} - ₹ {priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <Box className="cards-container">
        {sortedFoods.map((food, index) => (
          <Box key={food.id} className="card-wrapper">
            <Card onDoubleClick={() => handleDoubleClick(index)} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={food.title}
                  height="140"
                  image={food.url}
                  title={food.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {food.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Price: ₹{food.price.toFixed(2)}
                  </Typography>
                  {expandedIndex === index && (
                    <Typography variant="body2" color="textSecondary" component="p">
                      {food.body}
                    </Typography>
                  )}
                  <Box display="flex" alignItems="center" mt={2}>
                    <Button variant="outlined" onClick={() => handleQuantityChange(food, -1)}>-</Button>
                    <Typography variant="body2" color="textSecondary" component="span" mx={2}>
                      {quantity[food.id] || 0}
                    </Typography>
                    <Button variant="outlined" onClick={() => handleQuantityChange(food, 1)}>+</Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color="textPrimary" component="span" style={{ flex: 1 }}>
              {snackbarMessage}
            </Typography>
            {isAdding ? (
              <CheckCircleIcon style={{ color: 'green', marginLeft: '10px' }} />
            ) : (
              <CancelIcon style={{ color: 'red', marginLeft: '10px' }} />
            )}
            <LinearProgress
              variant="determinate"
              value={progress}
              className={isAdding ? 'progress-add' : 'progress-remove'}
              style={{
                flex: 1,
                marginLeft: '10px',
              }}
            />
          </Box>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        className="custom-snackbar"
      />
    </Container>
  );
};

export default PrivateAuthPage;
