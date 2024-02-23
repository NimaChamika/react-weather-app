import { Box, useTheme } from "@mui/material";
import { useWeatherDataContext } from "Contexts/WeatherDataContext";
import styles from "./index.module.css";

function DailyForecast() {
  // DESTRUCTURE FORECAST OBJ TO GET TODAY STATS
  const {
    forecast: { forecastday },
  } = useWeatherDataContext().weatherData;

  const hourlyForecastDataArr = [...forecastday];

  while (hourlyForecastDataArr.length < 7) {
    const nextDayStat = structuredClone(
      hourlyForecastDataArr[hourlyForecastDataArr.length - 1],
    );

    const date = new Date(nextDayStat.date);
    nextDayStat.date = new Date(date.setDate(date.getDate() + 1));

    console.log(nextDayStat);
    hourlyForecastDataArr.push(nextDayStat);
  }

  const hourlyStatContent = (
    <>
      {hourlyForecastDataArr.map((item, index) => {
        return <StatBox currentData={item} key={index} />;
      })}
    </>
  );

  return (
    <Box className={styles.parentBox}>
      <h4>Daily Forecast</h4>
      <Box className={styles.hourlyStatLstParentBox}>{hourlyStatContent}</Box>
    </Box>
  );
}

export default DailyForecast;

function StatBox({ currentData }) {
  const theme = useTheme();

  const getDay = (value) => {
    return new Date(value).toLocaleString("en", { weekday: "short" });
  };

  return (
    <Box
      aria-label="hourly-stat-box"
      className={styles.hourlyStatBox}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <h5>{getDay(currentData.date)}</h5>
      <img
        src={currentData.day.condition.icon}
        alt="conditionImage"
        style={{ height: "45%", width: "auto" }}
      />
      <h5>{`${currentData.day.avgtemp_c} \u2103`}</h5>
    </Box>
  );
}
