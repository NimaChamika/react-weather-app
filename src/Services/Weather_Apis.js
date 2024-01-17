import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Utils/Data";

const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCityWeather: builder.mutation({
      query: () => ({
        url: "/forecast.json?key=51aaeb98ac4f437eb4c160220241701&q=colombo&days=7&aqi=no&alerts=no",
        method: "GET",
        headers: {},
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetCityWeatherMutation } = weatherApi;
export default weatherApi;
