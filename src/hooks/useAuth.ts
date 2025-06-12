import { useState } from 'react';

export function useAuth() {
  // Unvollendet: Nur für test zwecke ist die variabel "isAuthenticated" auf wahr gestellt
  const [isAuthenticated] = useState<boolean>(true); 

  return { isAuthenticated };
}