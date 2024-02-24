import { Box, useTheme } from "@mui/material";
import styles from "./index.module.css";

function HourlyForecastStatBox({ currentData }) {
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
        src={currentData.icon}
        alt="conditionImage"
        style={{ height: "45%", width: "auto" }}
      />
      <h5>{`${currentData.temp} \u2103`}</h5>
    </Box>
  );
}

export { HourlyForecastStatBox };
