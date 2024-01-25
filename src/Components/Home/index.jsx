import { useEffect } from "react";
import SearchBar from "../SearchBar";
import { useGetCityWeatherMutation } from "../../Services/Weather_Apis";

function Home() {
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
      console.log(
        "🚀 ~ Home ~ getCityWeatherAPIResponse:",
        getCityWeatherAPIResponse,
      );
      pageContent = "SUCCESS";
    } else {
      pageContent = "NO DATA";
    }
  }

  // #region UTIL
  function callGetCityWeatherAPI(newCity) {
    getCityWeatherAPI({ city: newCity });
  }
  // #endregion

  return (
    <div>
      <SearchBar searchBtnClickFn={callGetCityWeatherAPI} />
      {pageContent}
    </div>
  );
}

export default Home;
