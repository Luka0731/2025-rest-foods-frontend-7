import React from "react";
import "../../styling/StartCard.css";
interface StartProps {
  value: string;
  src: string;
}
const StartCard: React.FC<StartProps> = ({ value, src }) => {
  return (
    <div className="startCard-wrapper">
      <img className="startCard-img" src={src} alt={value} />
      <h1 className="start-title">{value}</h1>
    </div>
  );
};

export default StartCard;
