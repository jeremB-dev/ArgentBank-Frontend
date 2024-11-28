// src/components/PrivateRoute/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Composant de protection des routes nécessitant une authentification
const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
  if (!token) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

// Validation des props du composant
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
