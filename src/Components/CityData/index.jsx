import { Box } from "@mui/material";
import styles from "./CityData.module.css";
import { getCityDateNTime } from "./utilFns";

function CityData({ locationData, currentWeatherData, todayForecastData }) {
  return (
    <Box className={styles.parentBox}>
      <Box className={styles.statBox1}>
        <h4>{getCityDateNTime(locationData.localtime)}</h4>
        <h2>
          {locationData.name} {locationData.country}
        </h2>
      </Box>

      <Box className={styles.statBox2}>
        <img src={currentWeatherData.condition.icon} alt="icon" />
        <h2>{currentWeatherData.temp_c} &#8451;</h2>
        <h2>{currentWeatherData.condition.text}</h2>
      </Box>
      <Box className={styles.statBox3}>
        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/sunrise.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>SunRise</h4>
          </Box>
          <h4>{todayForecastData.astro.sunrise}</h4>
        </Box>
        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/sunset.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>SunSet</h4>
          </Box>
          <h4>{todayForecastData.astro.sunset}</h4>
        </Box>
        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/temp_low.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>Min Temp</h4>
          </Box>
          <h4>{todayForecastData.day.mintemp_c}</h4>
        </Box>
        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/temp_high.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>Max Temp</h4>
          </Box>
          <h4>{todayForecastData.day.maxtemp_c}</h4>
        </Box>

        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/humidity.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>Humidity</h4>
          </Box>
          <h4>{currentWeatherData.humidity}%</h4>
        </Box>

        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/wind.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>Wind</h4>
          </Box>
          <h4>{currentWeatherData.wind_kph}km/h</h4>
        </Box>

        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/real_feel.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>Real Feel</h4>
          </Box>
          <h4>{currentWeatherData.feelslike_c} &#8451;</h4>
        </Box>

        <Box className={styles.miniStatBox}>
          <Box sx={{ display: "flex", height: "50%" }}>
            <img
              src="/images/chance_of_rain.png"
              alt="icon"
              style={{ height: "60%", width: "auto" }}
            />
            <h4>Chance Of Rain</h4>
          </Box>
          <h4>{todayForecastData.day.daily_chance_of_rain}%</h4>
        </Box>
      </Box>
    </Box>
  );
}

export default CityData;
