import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
export const PublicRoute = ({ children }) => {
  const { authUser, loading } = useAuthContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export const PrivateRoute = ({ children }) => {
  const { authUser, loading } = useAuthContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
};
