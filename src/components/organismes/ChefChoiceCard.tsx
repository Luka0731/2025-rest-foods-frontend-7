import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { MenuService, type MenuItem } from "../../services/MenuService";
import { useNavigate } from "react-router-dom";
import "../../styling/ChefChoice.css";
const ChefChoiceCard: React.FC = () => {
  const [chefChoice, setChefChoice] = useState<MenuItem[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    MenuService.getChefChoice()
      .then((data) => setChefChoice(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (chefChoice.length === 0) return <div>Loading...</div>;

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
