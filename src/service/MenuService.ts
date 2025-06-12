import { api } from "./Api";

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
  createMenuItem: async (
    newMenuItem: Omit<MenuItem, "id">
  ): Promise<MenuItem> => {
    const data = await api.post(`/menu`, newMenuItem);
    return data.data;
  },

  getMenu: async (): Promise<MenuItem[]> => {
    const data = await api.get("/menu");
    return data.data;
  },

  getMenuItem: async (id: number): Promise<MenuItem> => {
    const data = await api.get(`/menu/${id}`);
    return data.data;
  },

  updateMenuItem: async (
    id: number,
    updatedData: Partial<MenuItem>
  ): Promise<MenuItem> => {
    const data = await api.put(`/menu/${id}`, updatedData);
    return data.data;
  },

  deleteMenuItem: async (id: number): Promise<{ message: string } | void> => {
    const data = await api.delete(`/menu/${id}`);
    return data.data;
  },
};
