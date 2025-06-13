import React, { useEffect, useState } from "react";
import Image from "../atoms/Image";
import { Container } from "@mui/material";
import { MenuService, type MenuItem } from "../../services/MenuService";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text";

const ChefChoiceCard: React.FC = () => {
  const [chefChoice, setChefChoice] = useState<MenuItem | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChefChoice = async () => {
      try {
        const result = await MenuService.getMenu();
        const chefItem = result.find((item) => item.chefs_choice === true);
        if (chefItem) {
          setChefChoice(chefItem);
        } else {
          setError("No chef choice found.");
        }
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "Failed to load Chef Choice"
        );
      }
    };
    fetchChefChoice();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!chefChoice) return <div>Loading...</div>;

  return (
    <Container className="chefsChoice">
      <Image
        src={chefChoice.image_url}
        alt={chefChoice.name}
        className="menuItem-img"
        onClick={() => navigate(`/menu/${chefChoice.id}`)}
      />
      <h3 className="menuItem-name">{chefChoice.name}</h3>
      <Text className="chefChoice-desc">{chefChoice.description}</Text>
    </Container>
  );
};

export default ChefChoiceCard;
