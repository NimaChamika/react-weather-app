import { Box } from "@mui/material";
import styles from "./CityData.module.css";
import { getCityDateNTime, getCityStatDataArr } from "./UtilFns";

function CityLocationNDateTimeBox({ locationData }) {
  return (
    <Box className={styles.cityLocationNDateTimeBox}>
      <h4>{getCityDateNTime(locationData.localtime)}</h4>
      <h2>{`${locationData.name} ${locationData.country}`}</h2>
    </Box>
  );
}

function CityMainStatBox({ currentWeatherData }) {
  return (
    <Box className={styles.cityMainStatBox}>
      <img src={currentWeatherData.condition.icon} alt="conditionImage" />
      <h2>{`${currentWeatherData.temp_c} \u2103`}</h2>
      <h2>{currentWeatherData.condition.text}</h2>
    </Box>
  );
}

function CityAdditionalStatBox({ todayForecastData, currentWeatherData }) {
  const statArr = Object.entries(
    getCityStatDataArr(todayForecastData, currentWeatherData),
  ).map((item) => item[1]);

  return (
    <Box className={styles.cityAdditionalStatBox}>
      {statArr.map((item) => {
        return (
          <Box className={styles.miniStatBox} key={item.title}>
            <Box sx={{ display: "flex", height: "50%" }}>
              <img
                src={item.imgSrc}
                alt={item.altText}
                style={{ height: "60%", width: "auto" }}
              />
              <h4>{item.title}</h4>
            </Box>
            <h4>{item.value}</h4>
          </Box>
        );
      })}
    </Box>
  );
}

export { CityLocationNDateTimeBox, CityMainStatBox, CityAdditionalStatBox };
