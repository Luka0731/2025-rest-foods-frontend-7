import React from "react";
import { useMenu } from "../../hooks/useMenu";
import { useMenuActions } from "../../hooks/useMenuActions";
import MenuItemCard from "../atoms/MenuItemCard";
import "./MenuSection.css";

const MenuSection: React.FC = () => {
  const { menuItems, setMenuItems, loading, error } = useMenu();
  const { handleDelete } = useMenuActions(setMenuItems);

  if (loading) return <div>Loading Menu...</div>;
  if (error) return <div>Error loading menu: {error.message}</div>;

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <MenuItemCard key={item.id} {...item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default MenuSection;
