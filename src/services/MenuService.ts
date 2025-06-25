import { api } from "./Api";
import { CategoryService, type Category } from "./CategoryService";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  chefs_choice: boolean;
  image_url: string;
}

export const MenuService = {

  // |--- get ---|

  getMenu: async (chefsChoice: boolean, category: string | null, minPrice: number | null, maxPrice: number | null): Promise<MenuItem[]> => {
    const params = new URLSearchParams();
    if (chefsChoice) {
      params.append("chefsChoice", "true");
    }
    if (category != null) {
      params.append("category", category);
    }
    if (minPrice != null) {
      params.append("minPrice", minPrice.toString());
    }
    if (maxPrice != null) {
      params.append("maxPrice", maxPrice.toString());
    }
    const url = `/menu?${params.toString()}`;
    const data = await api.get(url);
    return data.data;
  },
  
  getMenuItem: async (id: number): Promise<MenuItem> => {
    const data = await api.get(`/menu/${id}`);
    return data.data;
  },

  // |--- post ---|

  createMenuItem: async (newMenuItem: Omit<MenuItem, "id">): Promise<MenuItem> => {
    await MenuService.ensureCategoryExists(newMenuItem.category);
    const data = await api.post(`/menu`, newMenuItem);
    return data.data;
  },

  // |--- put ---|

  updateMenuItem: async (id: number, updatedData: Partial<MenuItem>): Promise<MenuItem> => {
    if (updatedData.category) {
      await MenuService.ensureCategoryExists(updatedData.category);
    }
    const data = await api.put(`/menu/${id}`, updatedData);
    return data.data;
  },

  // |--- delete ---|

  deleteMenuItem: async (id: number): Promise<{ message: string } | void> => {
    const menuItem = await MenuService.getMenuItem(id);
    const categoryName = menuItem.category;
    await api.delete(`/menu/${id}`);

    // check if categorie still in use
    const allMenuItems = await MenuService.getMenu(false, null, null, null);
    const stillUsed = allMenuItems.some(item => item.category.toLowerCase() === categoryName.toLowerCase());
    if (!stillUsed) {
      const categories = await CategoryService.getCategories();
      const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
      if (category) {
        await CategoryService.deleteCategory(category.id);
      }
    }
  },

  // |--- helper ---|

  ensureCategoryExists: async (categoryName: string): Promise<void> => {
    const categories: Category[] = await CategoryService.getCategories();
    const exists = categories.some(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
    if (!exists) {
      await CategoryService.createCategory({ name: categoryName });
    }
  }
}; 