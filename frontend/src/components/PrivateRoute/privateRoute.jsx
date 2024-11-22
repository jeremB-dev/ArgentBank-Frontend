// src/components/PrivateRoute/PrivateRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Composant qui permet de proteger les routes privées.
const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  // Si le token n'est pas présent, rediriger vers la page de connexion.
  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
