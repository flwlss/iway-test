import type { Trip } from "../../types/trip";
import { baseApi } from "./baseApi";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<
      Trip,
      {
        page: number;
        name?: string;
        phone?: string;
        order_status: number[] | null;
      }
    >({
      query: ({ page, name, phone, order_status }) => {
        const params = new URLSearchParams({
          page: page.toString(),
        });

        if (name) params.append("names", name);
        if (phone) params.append("phone", phone);
        if (order_status) params.append("order_status", order_status.join(","));

        return `/v3/orders/trips?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetTripsQuery } = tripApi;
