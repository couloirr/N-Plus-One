import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
