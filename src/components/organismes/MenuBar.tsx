import MenuBarTab from "../atoms/MenuBarTab";
import { useCategories } from "../../hooks/useCategories";
import "./MenuBar.css";

const MenuBar = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <div>Loading MenuBar...</div>;
  if (error) return <div>Error loading MenuBar: {error.message}</div>;

  return (
    <div className="menu-bar">
      {categories.map((category) => (
        <MenuBarTab key={category.id} category={category.name} />
      ))}
    </div>
  );
};

export default MenuBar;
