import React, { createContext, useState, useContext } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OwnerPage from './pages/OwnerPage';
import TenantPage from './pages/TenantPage';

// Contexte d'Authentification
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser l'authentification
export const useAuth = () => useContext(AuthContext);

// Route Privée
const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    // Rediriger vers la page de login si pas authentifié
    return <Navigate to="/login" replace />;
  }

  // Vérifier le rôle si nécessaire
  if (requiredRole && user.role !== requiredRole) {
    // Rediriger vers une page non autorisée
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Composant principal de routage
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
        
        {/* Route par défaut */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Page non autorisée */}
        <Route 
          path="/unauthorized" 
          element={<div>Accès non autorisé</div>} 
        />
      </Routes>
    </Router>
  );
};

export default App;