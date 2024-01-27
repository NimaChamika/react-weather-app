import { Box } from "@mui/material";
import styles from "./CityData.module.css";
import { getCityDateNTime } from "./UtilFns";

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
      <h2>{`${currentWeatherData.temp_c} &#8451;`}</h2>
      <h2>{currentWeatherData.condition.text}</h2>
    </Box>
  );
}

export { CityLocationNDateTimeBox, CityMainStatBox };
