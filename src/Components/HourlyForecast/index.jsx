import { Box } from "@mui/material";
import { useWeatherDataContext } from "Contexts/WeatherDataContext";
import styles from "./index.module.css";
import { HourlyForecastStatBox } from "./UtilComponents";

function HourlyForecast() {
  // #region HOOKS
  // DESTRUCTURE FORECAST OBJ TO GET TODAY STATS
  const {
    forecast: {
      forecastday: [{ hour }],
    },
  } = useWeatherDataContext().weatherData;

  // #endregion

  // #region HOURLY STAT CONTENT
  // GET NECESSARY PROPERTIES ONLY
  const hourlyDataArr = hour.map((item) => ({
    time: item.time,
    icon: item.condition.icon,
    temp: item.temp_c,
  }));

  const hourlyStatContent = hourlyDataArr.map((item, index) => {
    return <HourlyForecastStatBox currentData={item} key={index} />;
  });

  // #endregion

  return (
    <Box className={styles.parentBox}>
      <h4>Hourly Forecast</h4>
      <Box className={styles.hourlyStatLstParentBox}>{hourlyStatContent}</Box>
    </Box>
  );
}

export default HourlyForecast;
