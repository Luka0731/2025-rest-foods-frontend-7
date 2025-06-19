import Menu from "../components/organismes/Menu";
import MenuBar from "../components/organismes/MenuBar";
import TopNav from "../components/organismes/TopNav";

const MenuPage = () => {
  return (
    <>
      <TopNav/>
      <div className="layout">
        <MenuBar/>
        <Menu/>
      </div>
      

    </>);
};

export default MenuPage;