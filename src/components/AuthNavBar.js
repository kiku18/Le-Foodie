import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from "../context/AuthContext";
import { useCart } from '../context/CartContext'; // Ensure correct import path
import "./AuthNavBar.css"; 

const AuthNavBar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Sign-In'); 
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
      <Toolbar className="toolbar">
        <div className="logo-container">
          <span className="logo-text">Foodie</span>
        </div>
        <div className="menu-container">
          <MenuItem className="nav-item"><Link to="/" className="nav-link">Home</Link></MenuItem>
          <MenuItem className="nav-item"><Link to="/About-Us" className="nav-link">About Us</Link></MenuItem>
          <MenuItem className="nav-item"><Link to="/New-Arrivals" className="nav-link">New Arrivals</Link></MenuItem>
          <MenuItem className="nav-item"><Link to="/FAQ" className="nav-link">FAQ</Link></MenuItem>
        </div>
        <div className="user-section">
          <MenuItem className="nav-item cart-item" onClick={() => navigate('/my-orders')}>
            <Badge badgeContent={cartItems.length} className="custom-badge">
              <ShoppingCartIcon className="cart-icon" />
            </Badge>
          </MenuItem>
          <Avatar alt={user.name} src={user.avatarUrl} className="avatar" />
          <span>Hi {user.name}</span>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            className="logout-button"
            style={{ marginLeft: "10px" }}
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AuthNavBar;
