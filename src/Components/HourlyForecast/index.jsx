import { Box, useTheme } from "@mui/material";
import { useWeatherDataContext } from "Contexts/WeatherDataContext";
import styles from "./index.module.css";

function HourlyForecast() {
  // DESTRUCTURE FORECAST OBJ TO GET TODAY STATS
  const {
    forecast: {
      forecastday: [{ hour: hourlyDataArr }],
    },
  } = useWeatherDataContext().weatherData;

  const hourlyStatContent = (
    <>
      {hourlyDataArr.map((item, index) => {
        return <CityMainStatBox currentData={item} key={index} />;
      })}
    </>
  );

  return (
    <Box className={styles.parentBox}>
      <h4>Hourly Forecast</h4>
      <Box className={styles.hourlyStatLstParentBox}>{hourlyStatContent}</Box>
    </Box>
  );
}

export default HourlyForecast;

function CityMainStatBox({ currentData }) {
  const theme = useTheme();

  const getTime = (value) => {
    const dateData = new Date(value)
      .toLocaleString("default", {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h12",
      })
      .split(" ");

    return `${dateData[0]} ${dateData[1]}`;
  };

  return (
    <Box
      aria-label="hourly-stat-box"
      className={styles.hourlyStatBox}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <h5>{getTime(currentData.time)}</h5>
      <img
        src={currentData.condition.icon}
        alt="conditionImage"
        style={{ height: "45%", width: "auto" }}
      />
      <h5>{`${currentData.temp_c} \u2103`}</h5>
    </Box>
  );
}
