import { api } from "./Api";

export interface Category {
  id: number;
  name: string;
}

export const CategoryService = {
  // |--- get ---|
  getCategories: async (): Promise<Category[]> => {
    const res = await api.get("/categories");
    return res.data;
  },

  getCategoryById: async (id: number): Promise<Category> => {
    const res = await api.get(`/categories/${id}`);
    return res.data;
  },

  // |--- post ---|
  createCategory: async (category: Omit<Category, "id">): Promise<Category> => {
    const res = await api.post("/categories", category);
    return res.data;
  },

  // |--- delete ---|
  deleteCategory: async (id: number): Promise<void> => {
    await api.delete(`/categories/${id}`);
  }
};