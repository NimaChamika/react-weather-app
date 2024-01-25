import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCityWeather: builder.mutation({
      query: ({ city }) => ({
        url: `/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetCityWeatherMutation } = weatherApi;
export default weatherApi;
