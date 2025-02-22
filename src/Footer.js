import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import './Footer.css'; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Box className="footer-grid">
          <Box className="footer-section">
            <Typography variant="h6">About Us</Typography>
            <Link href="#" className="link">
              Company Info
            </Link>
            <Link href="#" className="link">
              Careers
            </Link>
            <Link href="#" className="link">
              Blog
            </Link>
          </Box>

          <Box className="footer-section">
            <Typography variant="h6">Help</Typography>
            <Link href="#" className="link">
              Customer Service
            </Link>
            <Link href="#" className="link">
              FAQs
            </Link>
            <Link href="#" className="link">
              Returns
            </Link>
          </Box>

          <Box className="footer-section">
            <Typography variant="h6">Payment Methods</Typography>
            <Box className="payment-methods">
              <img src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.jpg" alt="Visa" className="payment-icon" />
              <img src="https://logos-download.com/wp-content/uploads/2016/03/Mastercard_Logo_1990.png" alt="Mastercard" className="payment-icon" />
              <img src="https://static-00.iconduck.com/assets.00/amex-icon-2048x1286-jssggdy1.png" alt="American Express" className="payment-icon" />
              <img src="https://w7.pngwing.com/pngs/419/305/png-transparent-paytm-hd-logo.png" alt="Paytm" className="payment-icon" />
              <img src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg" alt="PhonePe" className="payment-icon" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBJTq51pWH1HHjzTxDZPyJu6tT7WaQwsLwQ&s" alt="BharatPe" className="payment-icon" />
              <img src="https://www.ecommerce-nation.com/wp-content/uploads/2019/02/razorpay.webp" alt="RazorPay" className="payment-icon" />
              <img src="https://www.india.com/wp-content/uploads/2023/01/BHIM-UPI.jpg" alt="BHIM UPI" className="payment-icon" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="RUPAY" className="payment-icon" />
            </Box>
          </Box>

          <Box className="footer-section">
            <Typography variant="h6">Delivery Partners</Typography>
            <Box className="delivery-partners">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dunzo_Logo.svg/2560px-Dunzo_Logo.svg.png" alt="Dunzo" className="delivery-icon" />
              <img src="https://brandlogos.net/wp-content/uploads/2023/09/swiggy-logo_brandlogos.net_fplmb.png" alt="Swiggy" className="delivery-icon" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Zomato_Logo.png" alt="Zomato" className="delivery-icon" />
              <img src="https://product-assets.faasos.io/eatsure/production/es-brandcolor-logo.svg" alt="EatSure" className="delivery-icon" />
            </Box>
          </Box>

          <Box className="footer-section social-media">
            <Typography variant="h6">Connect</Typography>
            <Link href="https://www.facebook.com" className="link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
            </Link>
            <Link href="https://www.instagram.com" className="link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
            </Link>
            <Link href="https://www.x.com" className="link">
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg" alt="X" className="social-icon" />
            </Link>
          </Box>
        </Box>

        <Box mt={5} textAlign="center">
          <Typography variant="body2">
            © 2025 Foodie. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
