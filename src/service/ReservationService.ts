import { api } from "./Api";

export interface Reservation {
  id: number;
  guest_name: string;
  phone_number: string;
  start_time: number;
  start_time: string;
  cheftable_id: boolean;
  table_id: string;
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
