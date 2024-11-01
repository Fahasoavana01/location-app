import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const TenantPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Espace Locataire
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Recherche de Logements
              </Typography>
              <Typography variant="body1">
                Bienvenue dans votre espace locataire. Vous pouvez ici rechercher et consulter des logements disponibles.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TenantPage;