import { Box } from "@mui/material";
import { useWeatherDataContext } from "Contexts/WeatherDataContext";
import styles from "./index.module.css";
import { DailyForecastStatBox } from "./UtilComponents";

function DailyForecast() {
  const {
    forecast: { forecastday },
  } = useWeatherDataContext().weatherData;

  console.log("🚀 ~ dailyForecastDataArr ~ forecastday:", forecastday);

  const dailyForecastDataArr = forecastday.map((item) => ({
    date: item.date,
    icon: item.day.condition.icon,
    temp: item.day.avgtemp_c,
  }));

  while (dailyForecastDataArr.length < 7) {
    const nextDayStat = structuredClone(
      dailyForecastDataArr[dailyForecastDataArr.length - 1],
    );

    const date = new Date(nextDayStat.date);
    nextDayStat.date = new Date(date.setDate(date.getDate() + 1));

    dailyForecastDataArr.push(nextDayStat);
  }

  const dailyForecastStatContent = dailyForecastDataArr.map((item, index) => {
    return <DailyForecastStatBox data={item} key={index} />;
  });

  return (
    <Box className={styles.parentBox}>
      <h4>Daily Forecast</h4>
      <Box className={styles.hourlyStatLstParentBox}>
        {dailyForecastStatContent}
      </Box>
    </Box>
  );
}

export default DailyForecast;
