import React from 'react';
import { Container } from '@mui/material';
import OwnerDashboard from '../components/owner/OwnerDashboard';

const OwnerPage = () => {
  return (
    <Container maxWidth="xl">
      <OwnerDashboard />
    </Container>
  );
};

export default OwnerPage;