import Menu from "../organismes/Menu";
import MenuBar from "../organismes/MenuBar";
import TopNav from "../organismes/TopNav";
import "./MenuPage.css";


const MenuPage = () => {

  return (
    <>
      <TopNav/>
      
      <div className="layout">
        <div className="menu-bar">
          <MenuBar />
        </div>
        <div className="menu">
          <h2>Menu</h2>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default MenuPage;