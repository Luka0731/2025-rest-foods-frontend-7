import React from "react";
import Title from "../atoms/Title";
import Image from "../atoms/Image";
import { Container } from "@mui/material";

interface StartProps {
  value: string;
  src: string;
}
const StartCard: React.FC<StartProps> = ({ value, src }) => {
  return (
    <Container className="Start">
      <Image className="startCard-img" src={src} alt={value}></Image>
      <Title className="start-title">{value}</Title>
    </Container>
  );
};

export default StartCard;
