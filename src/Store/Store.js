import { configureStore, createSlice } from "@reduxjs/toolkit";
import cityApi from "Services/City_API";
import weatherApi from "Services/Weather_Api";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    iframeEvent: null,
  },
  reducers: {
    setIframeEvent: (state, action) => {
      state.iframeEvent = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(cityApi.middleware),
});

export const homeActions = homeSlice.actions;

export default store;
