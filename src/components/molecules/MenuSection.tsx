import React from "react";
import { useMenu } from "../../hooks/useMenu";
import { useMenuActions } from "../../hooks/useMenuActions";
import MenuItemCard from "../atoms/MenuItemCard";
import "./MenuSection.css";
import CategoryCard from "../atoms/CategoryCard";

const MenuSection: React.FC<{category : string}> = ({ category }) => {
  const { menuItems, loading, error } = useMenu({ category: category });
  const { handleDelete } = useMenuActions({ category: category });

  if (loading) return <div>Loading Menu...</div>;
  if (error) return <div>Error loading menu: {error.message}</div>;

  return (
    <>
      <CategoryCard title={category} icon="https://cdn-icons-png.flaticon.com/512/7780/7780470.png"/>
      <div className="menu-container">
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} {...item} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default MenuSection;
