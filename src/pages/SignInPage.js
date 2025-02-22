import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './SignInPage.css'; // Import the CSS file

const theme = createTheme();

const SignInPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from auth context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: email,
        password: password
      });
      console.log('Login successful:', response.data);
      login({ name: response.data.username, avatarUrl: 'https://example.com/avatar.png' }); // Mocking avatar URL for demo
      navigate('/private-auth-page'); // Redirect to the private page after successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="sign-in-container">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate className="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit"
            >
              Sign In
            </Button>
            <Grid container className="button-container">
              <Grid item xs>
                <Button href="#" variant="body2" className="link-button">
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
                <Button href="#" variant="body2" className="link-button">
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;
