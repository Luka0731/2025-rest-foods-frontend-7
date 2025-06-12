import { api } from "./Api";

export interface Table {
  id: number;
  available: string;
  nr: number;
  seats: number;
}

export const TableService = {
  createTable: async (newReservation: Omit<Table, "id">): Promise<Table> => {
    const data = await api.post(`/tables`, newReservation);
    return data.data;
  },

  getTables: async (): Promise<Table[]> => {
    const data = await api.get("/tables");
    return data.data;
  },

  getTable: async (id: number): Promise<Table> => {
    const data = await api.get(`/tables/${id}`);
    return data.data;
  },

  updateTable: async (
    id: number,
    updatedData: Partial<Table>
  ): Promise<Table> => {
    const data = await api.put(`/tables/${id}`, updatedData);
    return data.data;
  },

  deleteTable: async (id: number): Promise<{ message: string } | void> => {
    const data = await api.delete(`/tables/${id}`);
    return data.data;
  },
};
