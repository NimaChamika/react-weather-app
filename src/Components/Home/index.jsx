import { useState } from "react";
import CityData from "Components/CityData";
import SearchBar from "Components/SearchBar";
import { useGetCityWeatherQuery } from "Services/Weather_Api";
import CustomBackdrop from "Utils/CustomBackdrop";
import WeatherDataContextProvider from "Contexts/WeatherDataContext";
import HourlyForecast from "Components/HourlyForecast";

function Home({ changeThemeFn }) {
  // #region HOOKS
  const [cityName, setCityName] = useState("colombo");
  // #endregion

  // #region APIs
  /*
    CITY NAME IS PASSED AS A STATE VALUE. SO WHEN THE VALUE UPDATES,QUERY WILL BE TRIGGERED AUTOMATICALLY.
   */
  const {
    isFetching: isFetchingGetCityWeatherAPI,
    isSuccess: isSuccessGetCityWeatherAPI,
    data: getCityWeatherAPIResponse,
    error: getCityWeatherAPIError,
  } = useGetCityWeatherQuery({ city: cityName });
  // #endregion

  // #region CITY WEATHER API STATES

  let pageContent;

  if (isFetchingGetCityWeatherAPI) {
    pageContent = <CustomBackdrop />;
  } else if (getCityWeatherAPIError) {
    pageContent = "Error loading city weather";
  } else if (isSuccessGetCityWeatherAPI) {
    if (getCityWeatherAPIResponse) {
      const value = {
        weatherData: getCityWeatherAPIResponse,
        searchBtnClickFn,
        changeThemeFn,
      };

      pageContent = (
        <WeatherDataContextProvider value={value}>
          <SearchBar />
          <CityData />
          <HourlyForecast />
        </WeatherDataContextProvider>
      );
    } else {
      pageContent = "NO DATA";
    }
  }

  // #endregion

  // #region UTIL
  function updateCityNameFn(newCity) {
    setCityName(newCity);
  }

  function searchBtnClickFn(city) {
    updateCityNameFn(city);
  }
  // #endregion

  return <div>{pageContent}</div>;
}

export default Home;
