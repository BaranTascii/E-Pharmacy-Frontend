import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = true;

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

export default RestrictedRoute;
