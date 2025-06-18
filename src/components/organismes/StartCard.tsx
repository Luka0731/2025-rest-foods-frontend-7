import React from "react";

interface StartProps {
  value: string;
  src: string;
}
const StartCard: React.FC<StartProps> = ({ value, src }) => {
  return (
    <>
      <img className="startCard-img" src={src} alt={value} />
      <h1 className="start-title">{value}</h1>
    </>
  );
};

export default StartCard;
