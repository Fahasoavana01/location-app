import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Grid,
  Container
} from '@mui/material';

const OwnerDashboard = () => {
  const [properties, setProperties] = useState([
    {
      id: 1, 
      title: 'Appartement moderne', 
      address: '123 Rue de Paris, 75001 Paris'
    },
    {
      id: 2, 
      title: 'Maison de campagne', 
      address: '45 Chemin Rural, 86000 Poitiers'
    }
  ]);

  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1, 
      propertyTitle: 'Appartement moderne', 
      tenantName: 'Jean Dupont', 
      date: new Date().toISOString()
    }
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Tableau de Bord Propriétaire
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Mes Propriétés</Typography>
              {properties.map((property) => (
                <Card key={property.id} variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">
                      {property.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {property.address}
                    </Typography>
                    <Button variant="outlined" sx={{ mr: 1 }}>
                      Modifier
                    </Button>
                    <Button variant="outlined">
                      Détails
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Demandes de Réservation</Typography>
              {bookingRequests.map((request) => (
                <Card key={request.id} variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">
                      {request.propertyTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {request.tenantName}
                    </Typography>
                    <Typography variant="caption">
                      {new Date(request.date).toLocaleDateString()}
                    </Typography>
                    <div style={{ marginTop: 10 }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ mr: 1 }}
                      >
                        Accepter
                      </Button>
                      <Button 
                        variant="contained" 
                        color="error"
                      >
                        Refuser
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OwnerDashboard;