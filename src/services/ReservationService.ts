import { api } from "./Api";

export interface Reservation {
  id: number;
  guest_name: string;
  phone_number: string;
  start_time: string;
  end_time: string;
  table_id: number;
  people_count: number;
}

export const ReservationService = {
  createReservation: async (
    newReservation: Omit<Reservation, "id">
  ): Promise<Reservation> => {
    const data = await api.post(`/reservations`, newReservation);
    return data.data;
  },

  getReservations: async (): Promise<Reservation[]> => {
    const data = await api.get("/reservations");
    return data.data;
  },

  getReservation: async (id: number): Promise<Reservation> => {
    const data = await api.get(`/reservations/${id}`);
    return data.data;
  },

  checkAvailability: async (params: unknown) => {
    const res = await api.get("tables/availability", {
      params,
    });
    return res.data;
  },

  updateReservation: async (
    id: number,
    updatedData: Partial<Reservation>
  ): Promise<Reservation> => {
    const data = await api.put(`/reservations/${id}`, updatedData);
    return data.data;
  },

  deleteReservation: async (
    id: number
  ): Promise<{ message: string } | void> => {
    const data = await api.delete(`/reservations/${id}`);
    return data.data;
  },
};
