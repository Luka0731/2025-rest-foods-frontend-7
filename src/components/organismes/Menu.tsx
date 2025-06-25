import { useCategories } from "../../hooks/useCategories";
import MenuSection from "../molecules/MenuSection";

const Menu = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error.message}</div>;

  return (
    <>
      {categories.map((category) => (
        <div key={category.id} id={`category-${category.name}`}>
          <MenuSection category={category.name} />
        </div>
      ))}
    </>
  );
};

export default Menu;
