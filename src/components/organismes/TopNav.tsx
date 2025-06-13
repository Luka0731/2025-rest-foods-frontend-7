import React from "react";
import "../styles/TopNav.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@mui/material";

const TopNav: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="top-nav">
      <div className="top-nav__brand">MyApp</div>
      <ul className="top-nav__menu">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/menu")}>Menu</li>
        <li onClick={() => navigate("/reservation")}>Reservation</li>

        {isAuthenticated && (
          <>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
            <li onClick={() => navigate("/signup")}>Signup</li>
            <li onClick={() => navigate("/table")}>Dashboard</li>
            <li onClick={logout}>Logout</li>
          </>
        )}
      </ul>
      <Button onClick={() => navigate("/contact")}>Contact</Button>
    </nav>
  );
};

export default TopNav;
