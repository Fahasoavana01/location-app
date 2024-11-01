import React from 'react';
import { Card as MUICard, CardContent, Typography } from '@mui/material';

export const Card = ({ children, ...props }) => (
  <MUICard {...props}>{children}</MUICard>
);

export const CardHeader = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const CardTitle = ({ children, ...props }) => (
  <Typography variant="h6" {...props}>{children}</Typography>
);

export const CardContent = ({ children, ...props }) => (
  <CardContent {...props}>{children}</CardContent>
);