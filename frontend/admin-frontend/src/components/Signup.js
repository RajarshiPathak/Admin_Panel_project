import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username,
        password,
      });

      onSignup();
    } catch (error) {
      console.error('Signup error', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Signup</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignup}>Signup</Button>
    </Container>
  );
};

export default Signup;
