import Menu from "../organismes/Menu";
import MenuBar from "../organismes/MenuBar";
import TopNav from "../organismes/TopNav";

const MenuPage = () => {
  return (
    <>
      <TopNav/>
      <div className="layout">
        <MenuBar></MenuBar>
        <Menu></Menu>
      </div>
      

    </>);
};

export default MenuPage;
