import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const AddInstance = () => {
  const [name, setName] = useState('');
  const [connectionString, setConnectionString] = useState('');

  const handleAddInstance = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_API_URL}/instances/add`,
        { name, connectionString },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName('');
      setConnectionString('');
    } catch (error) {
      console.error('Error adding instance', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add MongoDB Instance</Typography>
      <TextField
        label="Instance Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Connection String"
        value={connectionString}
        onChange={(e) => setConnectionString(e.target.value)}
      />
      <Button onClick={handleAddInstance}>Add Instance</Button>
    </Container>
  );
};

export default AddInstance;
