import { useEffect, useState } from "react";
import { MenuService, type MenuItem } from "../../services/MenuService";

const MenuPage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MenuService.getMenu()
      .then((data) => setMenu(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Lade Menü...</div>;

  return (
    <div>
      <h2>Menü</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> – {item.description} ({item.price} €)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
