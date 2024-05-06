import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const InstanceList = () => {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    const fetchInstances = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/instances/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setInstances(response.data);
      } catch (error) {
        console.error('Error fetching instances', error);
      }
    };

    fetchInstances();
  }, []);

  return (
    <Container>
      <Typography variant="h4">MongoDB Instances</Typography>
      <List>
        {instances.map((instance) => (
          <ListItem key={instance._id}>
            <ListItemText primary={instance.name} secondary={instance.connectionString} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default InstanceList;
