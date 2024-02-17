import { useState } from "react";
import CityData from "Components/CityData";
import SearchBar from "Components/SearchBar";
import { useGetCityWeatherQuery } from "Services/Weather_Api";
import CustomBackdrop from "Utils/CustomBackdrop";

function Home({ changeThemeFn }) {
  const [cityName, setCityName] = useState("colombo");

  const {
    isFetching: isFetchingGetCityWeatherAPI,
    isSuccess: isSuccessGetCityWeatherAPI,
    data: getCityWeatherAPIResponse,
    error: getCityWeatherAPIError,
  } = useGetCityWeatherQuery({ city: cityName });

  let pageContent;

  if (isFetchingGetCityWeatherAPI) {
    pageContent = <CustomBackdrop />;
  } else if (getCityWeatherAPIError) {
    pageContent = "Error loading city weather";
  } else if (isSuccessGetCityWeatherAPI) {
    if (getCityWeatherAPIResponse) {
      pageContent = (
        <>
          <SearchBar
            searchBtnClickFn={callGetCityWeatherAPI}
            changeThemeFn={changeThemeFn}
          />
          <CityData
            locationData={getCityWeatherAPIResponse.location}
            currentWeatherData={getCityWeatherAPIResponse.current}
            todayForecastData={
              getCityWeatherAPIResponse.forecast.forecastday[0]
            }
          />
        </>
      );
    } else {
      pageContent = "NO DATA";
    }
  }

  // #region UTIL
  function callGetCityWeatherAPI(newCity) {
    setCityName(newCity);
  }
  // #endregion

  return <div>{pageContent}</div>;
}

export default Home;
