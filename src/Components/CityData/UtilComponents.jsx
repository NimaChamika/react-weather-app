import { Box, useTheme } from "@mui/material";
import styles from "./CityData.module.css";
import { getCityDateNTime, getCityStatDataArr } from "./UtilFns";

function CityLocationNDateTimeBox({ locationData }) {
  return (
    <Box
      aria-label="city location N data time"
      className={styles.cityLocationNDateTimeBox}
    >
      <h4>{getCityDateNTime(locationData.localtime)}</h4>
      <h3
        className={styles.cityName}
      >{`${locationData.name}, ${locationData.country}`}</h3>
    </Box>
  );
}

function CityMainStatBox({ currentWeatherData }) {
  return (
    <Box aria-label="city main stats" className={styles.cityMainStatBox}>
      <img
        src={currentWeatherData.condition.icon}
        alt="conditionImage"
        style={{ height: "100%", width: "auto" }}
      />
      <h3>{`${currentWeatherData.temp_c} \u2103`}</h3>
      <h3 className={styles.conditionText}>
        {currentWeatherData.condition.text}
      </h3>
    </Box>
  );
}

function CityMiniStatBox({ todayForecastData, currentWeatherData }) {
  const theme = useTheme();

  const statArr = Object.entries(
    getCityStatDataArr(todayForecastData, currentWeatherData),
  ).map((item) => item[1]);

  return (
    <Box aria-label="city mini stats" className={styles.cityMiniStatBox}>
      {statArr.map((item) => {
        return (
          <Box
            aria-label="mini stat box"
            className={styles.miniStatBox}
            key={item.title}
            sx={{ backgroundColor: theme.palette.background.paper }}
          >
            <Box
              sx={{
                display: "flex",
                height: "50%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={item.imgSrc}
                alt={item.altText}
                style={{ height: "60%", width: "auto", marginRight: "10px" }}
              />

              <h4 style={{ whiteSpace: "nowrap", fontWeight: 400 }}>
                {item.title}
              </h4>
            </Box>
            <h3>{item.value}</h3>
          </Box>
        );
      })}
    </Box>
  );
}

export { CityLocationNDateTimeBox, CityMainStatBox, CityMiniStatBox };
