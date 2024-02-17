import { createContext, useContext } from "react";

const weatherDataContext = createContext();

export function useWeatherDataContext() {
  const context = useContext(weatherDataContext);

  if (!context) {
    throw new Error("Component must be wrapped in a provider");
  }

  return context;
}

export default function WeatherDataContextProvider({ children, value }) {
  return (
    <weatherDataContext.Provider value={value}>
      {children}
    </weatherDataContext.Provider>
  );
}
