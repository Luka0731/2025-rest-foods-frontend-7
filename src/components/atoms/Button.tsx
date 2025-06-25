import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  color: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, textColor = "white", size = "medium", onClick }) => {
  const sizeClass = {
    small: "button-small",
    medium: "button-medium",
    large: "button-large"
  }[size];

  return (
    <button
      className={`menu-button ${sizeClass}`}
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
