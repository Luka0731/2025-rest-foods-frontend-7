import React from "react";
import { Container } from "@mui/material";
import { useMenu } from "../../hooks/useMenu";
import { useNavigate } from "react-router-dom";
import "./ChefChoiceCard.css";

const ChefChoiceCard: React.FC = () => {
  const { menuItems: chefChoice, loading, error } = useMenu({ chefsChoice: true });
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (chefChoice.length === 0) return <div>No Chef's Choice available.</div>;

  return (
    <Container className="chefsChoice">
      {chefChoice.map((item) => (
        <div key={item.id} className="chefChoice-card">
          <img
            src={item.image_url}
            alt={item.name}
            className="menuItem-img"
            onClick={() => navigate(`/menu/${item.id}`)}
          />
          <h3 className="menuItem-name">{item.name}</h3>
          <p className="chefChoice-desc">{item.description}</p>
        </div>
      ))}
    </Container>
  );
};

export default ChefChoiceCard;
