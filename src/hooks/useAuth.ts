import { useState } from 'react';

export function useAuth() {
<<<<<<< Updated upstream
  // Unvollendet: Nur für test zwecke ist die variabel "isAuthenticated" auf wahr gestellt
  const [isAuthenticated] = useState<boolean>(true); 
=======
  // fake auth hook
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  
  /*
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("accessToken"))
  );
  */
>>>>>>> Stashed changes

  return { isAuthenticated };
}