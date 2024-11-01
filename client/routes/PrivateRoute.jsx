import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import OwnerPage from './pages/OwnerPage';
import TenantPage from './pages/TenantPage';
import LoginPage from './pages/LoginPage';

// Route protégée qui vérifie l'authentification
const PrivateRoute = ({ children, requiredRole }) => {
  // Logique de vérification d'authentification et de rôle
  const isAuthenticated = true; // À remplacer par votre logique réelle
  const userRole = 'owner';     // À remplacer par votre logique réelle

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route 
          path="/owner" 
          element={
            <PrivateRoute requiredRole="owner">
              <OwnerPage />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/tenant" 
          element={
            <PrivateRoute requiredRole="tenant">
              <TenantPage />
            </PrivateRoute>
          } 
        />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;