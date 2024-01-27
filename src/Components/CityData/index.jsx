import { Box } from "@mui/material";
import styles from "./CityData.module.css";
import {
  CityAdditionalStatBox,
  CityLocationNDateTimeBox,
  CityMainStatBox,
} from "./UtilComponents";

function CityData({ locationData, currentWeatherData, todayForecastData }) {
  return (
    <Box className={styles.parentBox}>
      <CityLocationNDateTimeBox locationData={locationData} />
      <CityMainStatBox currentWeatherData={currentWeatherData} />

      <CityAdditionalStatBox
        todayForecastData={todayForecastData}
        currentWeatherData={currentWeatherData}
      />
    </Box>
  );
}

export default CityData;
