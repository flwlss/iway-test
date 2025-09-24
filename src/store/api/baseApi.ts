import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// в env
const BACKEND_URL = "https://transstage1.iwayex.com/transnextgen";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
  }),
  endpoints: () => ({}),
});
