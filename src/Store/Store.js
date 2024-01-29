import { configureStore, createSlice } from "@reduxjs/toolkit";
import weatherApi from "Services/Weather_Apis";

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export const homeActions = homeSlice.actions;

export default store;
