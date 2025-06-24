import React from "react";
import { useMenu } from "../../hooks/useMenu";
import { useMenuActions } from "../../hooks/useMenuActions";
import MenuItemCard from "../atoms/MenuItemCard";
import "./MenuSection.css";
import CategoryCard from "../atoms/CategoryCard";

const MenuSection: React.FC<{ category: string }> = ({ category }) => {
  const { menuItems, loading, error } = useMenu({ category: category });
  const { handleDelete } = useMenuActions({ category: category });

  if (loading) return <div>Loading Menu...</div>;
  if (error) return <div>Error loading menu: {error.message}</div>;

  // Generiere die id für Scroll-Ziel
  const sectionId = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div id={sectionId}>
      <CategoryCard category={category} />
      <div className="menu-container">
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} {...item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
