import { MenuService } from "../services/MenuService";
import { useMenu } from "./useMenu";

export function useMenuActions(options: { category?: string | null }) {
  const { setMenuItems } = useMenu(options);

  const handleDelete = async (id: number) => {
  try {
    setMenuItems(prev => prev.filter(item => item.id !== id));
    await MenuService.deleteMenuItem(id);
    const updatedMenuItems = await MenuService.getMenu(
      false,
      options.category ?? null,
      null,
      null
    );
    setMenuItems(updatedMenuItems);
  } catch (err) {
    console.error("Fehler beim Löschen:", err);
  }
};


  return { handleDelete };
}
