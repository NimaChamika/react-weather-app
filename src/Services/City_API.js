import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CITY_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCities: builder.mutation({
      query: ({ cityPrefix }) => ({
        url: `/cities?minPopulation=500000&namePrefix=${cityPrefix}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7ca2edccb9msha205ded74659f10p140760jsnd1e08b6c330d",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetCitiesMutation } = cityApi;
export default cityApi;
