import { useNavigate } from "react-router-dom";
import { MenuItemForm } from "../molecules/MenuItemForum";

const MenuItemCreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("Menu Item erfolgreich erstellt!");
    navigate("/menu");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Neues Menu Item erstellen</h1>
      <MenuItemForm onSuccess={handleSuccess} />
    </div>
  );
};

export default MenuItemCreatePage;