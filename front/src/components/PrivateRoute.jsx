import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { isAuthenticated, user, loadUser } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && !user) {
      loadUser();
    }

    setLoading(true);
    
    if(!user && !loading) {
      navigate("/login");
    }
  }, [isAuthenticated, user, loadUser]);

  return children;
};

export default PrivateRoute;
