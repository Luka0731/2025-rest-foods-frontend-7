import { useState } from 'react';

export function useAuth() {

  // fake auth hook
  const [isAuthenticated] = useState(true); 
  
  /*
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("accessToken"))
  );
  */

  return { isAuthenticated };
}