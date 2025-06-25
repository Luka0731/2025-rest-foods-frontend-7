import { useNavigate } from "react-router-dom";
import "./MenuBarTab.css";

const MenuBarCreateTab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-bar-tab" onClick={() => navigate("/menu/new")}>
      <img className="icon" src="\assets\icons\create.png" alt="icon" />
      <p className="title">New Item</p>
    </div>
  );
};

export default MenuBarCreateTab;