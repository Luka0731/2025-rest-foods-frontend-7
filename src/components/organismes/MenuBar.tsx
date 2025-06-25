import MenuBarTab from "../atoms/MenuBarTab";
import { useCategories } from "../../hooks/useCategories";
import "./MenuBar.css";
import MenuBarCreateTab from "../atoms/MenuBarCreateTab";
import { useAuth } from "../../hooks/useAuth";
import MenuBarFilterTab from "../atoms/MenuBarFilterTab";

const MenuBar = () => {
  const { categories, loading, error } = useCategories();
  const { isAuthenticated } = useAuth();

  let adminTabs = null;
  if (isAuthenticated) {
    adminTabs = (<MenuBarCreateTab/>);
  }

  if (loading) return <div>Loading MenuBar...</div>;
  if (error) return <div>Error loading MenuBar: {error.message}</div>;

  return (
    <div className="menu-bar">
      {adminTabs}
       <MenuBarFilterTab/>
      {categories.map((category) => (
        <MenuBarTab key={category.id} category={category.name} />
      ))}
    </div>
  );
};

export default MenuBar;
