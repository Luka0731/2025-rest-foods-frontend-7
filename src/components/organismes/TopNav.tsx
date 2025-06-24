import React, { useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./TopNav.css";

const TopNav: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="top-nav">
      <div className="top-nav__brand" onClick={() => navigate("/")}>
        <RestaurantIcon className="top-nav__icon" />
        <span className="top-nav__brand-text">REST-Foods</span>
      </div>

      <div className="top-nav__toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <ul className={`top-nav__menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/menu")}>Menu</li>
        <li onClick={() => navigate("/reservation")}>Reservation</li>
        {isAuthenticated && (
          <>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
            <li onClick={() => navigate("/signup")}>Signup</li>
            <li onClick={() => navigate("/table")}>Table</li>
            <li onClick={logout}>Logout</li>
          </>
        )}
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
