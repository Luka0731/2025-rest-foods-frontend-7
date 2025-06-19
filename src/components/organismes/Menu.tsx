import CategoryCard from "../atoms/CategoryCard";
import MenuSection from "../molecules/MenuSection";

const Menu = () => {
  return (
    <>
      Menu
      <CategoryCard backgroundImage={""} icon={"https://cdn-icons-png.flaticon.com/512/7780/7780470.png"} title={"Fisch Gerichte"} />
      <MenuSection />
    </>
  );
};

export default Menu;
