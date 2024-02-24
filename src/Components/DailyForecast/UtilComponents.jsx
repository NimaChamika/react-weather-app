import { Box, useTheme } from "@mui/material";
import styles from "./index.module.css";

function DailyForecastStatBox({ data }) {
  const theme = useTheme();
  const { date, icon, temp } = data;

  const getDay = (value) => {
    return new Date(value).toLocaleString("en", { weekday: "short" });
  };

  return (
    <Box
      aria-label="hourly-stat-box"
      className={styles.hourlyStatBox}
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <h5>{getDay(date)}</h5>
      <img
        src={icon}
        alt="conditionImage"
        style={{ height: "45%", width: "auto" }}
      />
      <h5>{`${temp} \u2103`}</h5>
    </Box>
  );
}

export { DailyForecastStatBox };
