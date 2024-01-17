import { Button } from "@mui/material";
import { useGetCityWeatherMutation } from "../../Services/Weather_Apis";

function Home() {
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

  return (
    <div>
      <Button
        onClick={() => {
          console.log("1");
          getCityWeatherAPI();
        }}
      >
        CALL
      </Button>
      {pageContent}
    </div>
  );
}

export default Home;
