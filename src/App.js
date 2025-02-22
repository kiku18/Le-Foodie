import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthNavBar from './components/AuthNavBar';
import Hero from './Hero';
import HomePage from './Home';
import AboutUs from './pages/AboutUs';
import NewArrivals from './pages/NewArrivals';
import FAQ from './pages/FAQ';
import Footer from './Footer';
import SignInPage from './pages/SignInPage';
import PrivateAuthPage from './pages/PrivateAuthPage';
import MyOrders from './pages/MyOrders';
import Checkout from './pages/Checkout'; // Ensure correct import path
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext'; // Ensure correct import path
import './App.css';
import Rewards from './pages/Rewards'; // Ensure correct import path
import FoodieMagazine from './pages/FoodieMagazine'; // Ensure correct import path

const App = () => (
  <AuthProvider>
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<><Hero /><HomePage /></>} />
            <Route path="/About-Us" element={<AboutUs />} />
            <Route path="/New-Arrivals" element={<NewArrivals />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Rewards" element={<Rewards />} />
            <Route path="/Foodie-Magazine" element={<FoodieMagazine />} />
            <Route path="/Sign-In" element={<SignInPage />} />
            <Route path="/private-auth-page" element={<PrivateAuthPage />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  </AuthProvider>
);

const Header = () => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated:", isAuthenticated); 
  return isAuthenticated ? <AuthNavBar /> : <NavBar />;
};

export default App;
