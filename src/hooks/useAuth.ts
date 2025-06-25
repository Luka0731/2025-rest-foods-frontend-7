import { useState } from "react";

export function useAuth() {

  // fake auth hook
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  
  /*
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("accessToken"))
  );
  */

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return { isAuthenticated, logout };
}
