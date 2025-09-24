import type { Trip } from "../../types/trip";
import { baseApi } from "./baseApi";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<Trip, void>({
      query: () => "/v3/orders/trips",
    }),
  }),
});

export const { useGetTripsQuery } = tripApi;
