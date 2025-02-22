import React, { useState } from 'react';
import {
  Container,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Select,
  Slider,
  InputLabel,
  FormControl,
  Modal,
  TextField,
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Foods from './Foods';
import './NewArrivals.css';

const NewArrivalSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [cuisine, setCuisine] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleDoubleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
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

  const handleFilterMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
    <Container className="container new-arrivals">
      <Typography variant="h4" component="h2" gutterBottom className="heading">
        New Arrivals
      </Typography>

      <Box className="filter-section">
        <IconButton onClick={handleFilterMenuOpen}>
          <FilterAltOutlinedIcon />
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
            className="custom-slider"
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
                  <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                    <Button
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      onClick={handleModalOpen}
                    >
                      Order Now
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="sign-in-modal-title"
        aria-describedby="sign-in-modal-description"
      >
        <Box className="modal-box">
          <Typography variant="h6" id="sign-in-modal-title">
            Sign In
          </Typography>
          <TextField label="Email" type="email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default NewArrivalSection;
