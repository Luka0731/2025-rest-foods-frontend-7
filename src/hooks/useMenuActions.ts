import { MenuService, type MenuItem } from "../services/MenuService";


export function useMenuActions(setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>) {
  const handleDelete = async (id: number) => {
    try {
      await MenuService.deleteMenuItem(id);
      setMenuItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Fehler beim Löschen:", err);
    }
  };

  return { handleDelete };
}
