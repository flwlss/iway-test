import { baseApi } from "./baseApi";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrips: builder.query<any[], void>({
      query: () => "/v3/orders/trips",
    }),
  }),
});

export const { useGetTripsQuery } = tripApi;
