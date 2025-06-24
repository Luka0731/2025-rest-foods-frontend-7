import { useEffect, useState } from "react";
import { MenuService, type MenuItem } from "../services/MenuService";

interface UseMenuOptions {
  chefsChoice?: boolean;
  category?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
}

export function useMenu(options: UseMenuOptions = {}) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const data = await MenuService.getMenu(
          options.chefsChoice ?? false,
          options.category ?? null,
          options.minPrice ?? null,
          options.maxPrice ?? null
        );
        setMenuItems(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [options.chefsChoice, options.category, options.minPrice, options.maxPrice]);

  return { menuItems, setMenuItems, loading, error };
}
