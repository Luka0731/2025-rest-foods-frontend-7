import React from "react";
import { Container } from "@mui/material";

interface StartProps {
  value: string;
  src: string;
}
const StartCard: React.FC<StartProps> = ({ value, src }) => {
  return (
    <Container className="start">
      <img className="startCard-img" src={src} alt={value} />
      <h1 className="start-title">{value}</h1>
      <div className="bottom-blur"></div>
    </Container>
  );
};

export default StartCard;
