import { useNavigate } from "react-router-dom";
import "./MenuBarTab.css";

const MenuBarCreateTab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-bar-tab" onClick={() => navigate("/dashboard")}>
      <img className="icon" src="" alt="icon" /> {/* ToDo */}
      <p className="title">Add new Item</p>
    </div>
  );
};

export default MenuBarCreateTab;
