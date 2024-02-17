import { Box } from "@mui/material";
import styles from "./CityData.module.css";
import {
  CityLocationNDateTimeBox,
  CityMainStatBox,
  CityMiniStatBox,
} from "./UtilComponents";

function CityData() {
  return (
    <Box className={styles.parentBox}>
      <CityLocationNDateTimeBox />
      <CityMainStatBox />
      <CityMiniStatBox />
    </Box>
  );
}

export default CityData;
