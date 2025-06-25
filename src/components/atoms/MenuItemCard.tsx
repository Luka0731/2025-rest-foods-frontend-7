import { useAuth } from "../../hooks/useAuth";
import React from "react";
import "./MenuItemCard.css";
import { useNavigate } from "react-router-dom";
import type { MenuItem } from "../../services/MenuService";
import Button from "./Button";

interface MenuItemCardProps extends MenuItem {
  onDelete: (id: number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ id, name, image_url, description, price, chefs_choice, onDelete }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  let bottomPart = null;
  if (isAuthenticated) {
    bottomPart = (
      <div className="buttons-container">
        <Button text={"Edit"} color={"#A4B465"} onClick={() => navigate(`/menu/${id}/edit`)} size="medium" />
        <Button text={"Delete"} color={"#626F47"} onClick={() => onDelete(id)} />
      </div>
    );
  }

  let chefsChoiceIcon = null;
  if (chefs_choice) {
    chefsChoiceIcon = (
      <div className="chefs-choice-icon">
        <p className="chefs-choice-text">Chefs Choice</p>
      </div>
    )
  }

  return (
    <div className="menu-item-card">
      <img className="dish-image" src={image_url} alt={name} onClick={() => navigate(`/menu/${id}`)} />
      {chefsChoiceIcon}
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price-text">${price.toFixed(2)}</p>
      {bottomPart}
    </div>
  );
};

export default MenuItemCard;
