import React from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OptionCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container
        className="bookA_table-container"
        onClick={() => navigate("/reservation")}
      >
        <h3 className="container-txt">Book a Table</h3>
      </Container>

      <Container
        className="goTo_menu-container"
        onClick={() => navigate("/menu")}
      >
        <h3 className="container-txt">Book a Table</h3>
      </Container>
    </div>
  );
};

export default OptionCard;
