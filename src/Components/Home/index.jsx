import { useEffect } from "react";
import SearchBar from "../SearchBar";
import { useGetCityWeatherMutation } from "../../Services/Weather_Apis";
import CityData from "../CityData";

function Home({ changeThemeFn }) {
  // #region HOOKS

  useEffect(() => {
    getCityWeatherAPI({ city: "colombo" });
  }, []);

  // #endregion

  const [
    getCityWeatherAPI,
    {
      isLoading: isLoadingGetCityWeatherAPI,
      isSuccess: isSuccessGetCityWeatherAPI,
      data: getCityWeatherAPIResponse,
      error: getCityWeatherAPIError,
    },
  ] = useGetCityWeatherMutation();

  let pageContent;

  if (isLoadingGetCityWeatherAPI) {
    pageContent = "Loading";
    console.log("Loading");
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
    getCityWeatherAPI({ city: newCity });
  }
  // #endregion

  return <div>{pageContent}</div>;
}

export default Home;
