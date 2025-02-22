import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import CakeIcon from "@mui/icons-material/Cake";
import Foods from '../pages/Foods'; // Importing food list
import "./NavBar.css"; // Importing CSS file

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  color: "#000000",
  boxShadow: "none",
  borderBottom: "1px solid #e0e0e0",
}));

const PreHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#ffffff",
  color: "#000000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 0,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  flexGrow: 1,
  borderBottom: "1px solid #d3d3d3",
  maxWidth: "800px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [megaMenuEl, setMegaMenuEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(Foods);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = Foods.filter(food =>
      food.title.toLowerCase().includes(query) ||
      food.cuisine.toLowerCase().includes(query)
    );
    setFilteredFoods(filtered);
  };

  const menuItems = [
    "Home",
    "About Us",
    "Rewards",
    "New Arrivals",
    "Italian",
    "French",
    "German",
    "English",
    "Pastries",
    "FAQ",
    "Foodie Magazine",
  ];

  const megaMenuItems = {
    "Italian": [
      { name: "Pasta", icon: <RestaurantIcon /> },
      { name: "Pizza", icon: <LocalPizzaIcon /> },
      { name: "Risotto", icon: <RestaurantIcon /> },
    ],
    "French": [
      { name: "Croissant", icon: <BreakfastDiningIcon /> },
      { name: "Baguette", icon: <BreakfastDiningIcon /> },
      { name: "Quiche", icon: <BreakfastDiningIcon /> },
    ],
    "German": [
      { name: "Bratwurst", icon: <RestaurantIcon /> },
      { name: "Pretzel", icon: <RestaurantIcon /> },
      { name: "Sauerbraten", icon: <RestaurantIcon /> },
    ],
    "English": [
      { name: "Fish and Chips", icon: <RestaurantIcon /> },
      { name: "Shepherd's Pie", icon: <RestaurantIcon /> },
      { name: "Full English Breakfast", icon: <BreakfastDiningIcon /> },
    ],
    "Pastries": [
      { name: "Danish", icon: <CakeIcon /> },
      { name: "Eclair", icon: <CakeIcon /> },
      { name: "Macaron", icon: <CakeIcon /> },
      { name: "Muffin", icon: <CakeIcon /> },
      { name: "Scone", icon: <CakeIcon /> },
    ],
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMegaMenuEl(null);
  };

  const handleMegaMenuOpen = (event, item) => {
    setMegaMenuEl({ anchor: event.currentTarget, item });
  };

  const handleMegaMenuClose = () => {
    setMegaMenuEl(null);
  };

  return (
    <>
      <PreHeader>
        <div className="preheader-left">
          <div className="currency-language">
            <MenuItem className="nav-item">
              <img src="https://img.icons8.com/color/24/000000/usa.png" alt="US Flag" className="flag" /> USD
            </MenuItem>
            <MenuItem className="nav-item">
              <img src="https://img.icons8.com/color/24/000000/india.png" alt="ID Flag" className="flag" /> INR
            </MenuItem>
            <MenuItem className="nav-item">
              <LanguageIcon /> EN
            </MenuItem>
            <MenuItem className="nav-item">
              <LanguageIcon /> HINDI
            </MenuItem>
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search your delicacy…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Search>
        </div>
        <div className="preheader-right">
          <MenuItem className="nav-item">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Icon" className="icon" /> Sign in with Google
          </MenuItem>
          <MenuItem className="nav-item">
            <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="Facebook Icon" className="icon" /> Sign in with Facebook
          </MenuItem>
          <MenuItem className="nav-item"><Link to="/Sign-In" className="nav-link"> Sign In </Link></MenuItem>
          <MenuItem className="nav-item">Register</MenuItem>
          <MenuItem className="nav-item">
            <ShoppingCartIcon />
          </MenuItem>
        </div>
      </PreHeader>
      <StyledAppBar position="static">
        <Toolbar className="toolbar">
          <div className="logo-container">
            <span className="logo-text">Foodie</span>
          </div>
          <div className="menu-container">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item === "Home" ? (
                  <MenuItem className="nav-item">
                    <Link to="/" className="nav-link">
                      {item}
                    </Link>
                  </MenuItem>
                ) : item === "New Arrivals" ? (
                  <MenuItem className="nav-item">
                    <Link to="/New-Arrivals" className="nav-link">
                      {item}
                    </Link>
                  </MenuItem>
                ) : item === "Rewards" ? (
                  <MenuItem className="nav-item">
                    <Link to="/Rewards" className="nav-link">
                      {item}
                    </Link>
                  </MenuItem>
                ) : item === "Foodie Magazine" ? (
                  <MenuItem className="nav-item">
                    <Link to="/Foodie-Magazine" className="nav-link">
                      {item}
                    </Link>
                  </MenuItem>
                ) : (index >= 4 && index <= 7) || item === "Pastries" ? (
                  <div className="dropdown-container">
                    <MenuItem
                      onClick={(event) => handleMegaMenuOpen(event, item)}
                      className="nav-item dropdown"
                    >
                      {item}
                      <ArrowDropDownIcon />
                    </MenuItem>
                    <Menu
                      anchorEl={megaMenuEl?.anchor}
                      open={Boolean(megaMenuEl) && megaMenuEl.item === item}
                      onClose={handleMegaMenuClose}
                      MenuListProps={{ "aria-labelledby": "basic-button" }}
                    >
                      <div className="mega-menu">
                        {megaMenuItems[item]?.map((subItem, subIndex) => (
                          <div key={subIndex} className="mega-menu-column">
                            <h4>{subItem.icon}{subItem.name}</h4>
                            <ul>
                              <li> Small </li>
                              <li> Medium </li>
                              <li> Large </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Menu>
                  </div>
                ) : item === "About Us" ? (
                  <MenuItem className="nav-item">
                    <Link to="/About-Us" className="nav-link">
                      {item}
                    </Link>
                  </MenuItem>
                ) : item === "FAQ" ? (
                  <MenuItem className="nav-item">
                    <Link to="/FAQ" className="nav-link">
                      {item}
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem className="nav-item">{item}</MenuItem>
                )}
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </StyledAppBar>
      {/* Display Filtered Results */}
      {searchQuery && (
        <div className="search-results-container">
          {filteredFoods.length ? (
            <div className="search-results-grid">
              {filteredFoods.map((food) => (
                <div key={food.id} className="search-result-card">
                  <img src={food.url} alt={food.title} className="search-result-image" />
                  <div className="search-result-details">
                    <h3>{food.title}</h3>
                    <p>{food.body}</p>
                    <span className="search-result-price">₹{food.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">No results found for "{searchQuery}"</p>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;