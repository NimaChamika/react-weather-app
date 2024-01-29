import { DarkMode, LightMode, SearchOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import {
  Autocomplete,
  Box,
  ButtonGroup,
  IconButton,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

import styles from "./SearchBar.module.css";
import { ThemeMode } from "../../Utils/Data";
import WithGetCities from "./WithGetCities";

function SearchBar({
  searchBtnClickFn,
  changeThemeFn,
  cityList,
  callGetCitiesAPI,
}) {
  const theme = useTheme();

  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (cityList.length > 0) {
      setData(cityList);
    }
  }, [cityList]);

  return (
    <Box className={styles.parentBox}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={data}
        getOptionLabel={(option) => {
          return option;
        }}
        renderOption={(props, option) => <li {...props}>{option}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Your City..."
            onChange={(e) => {
              callGetCitiesAPI(e.target.value);
            }}
          />
        )}
      />
      <IconButton
        aria-label="searchBtn"
        onClick={() => {
          searchBtnClickFn(value);
        }}
        edge="end"
      >
        <SearchOutlined />
      </IconButton>
      <ButtonGroup className={styles.themeBox}>
        <IconButton
          aria-label="lightThemeBtn"
          sx={{
            color: theme.palette.background.lightThemeBtn,
          }}
          onClick={() => {
            changeThemeFn(ThemeMode.LIGHT);
          }}
        >
          <LightMode />
        </IconButton>
        <IconButton
          aria-label="darkThemeBtn"
          sx={{
            color: theme.palette.background.darkThemeBtn,
          }}
          onClick={() => {
            changeThemeFn(ThemeMode.DARK);
          }}
        >
          <DarkMode />
        </IconButton>
      </ButtonGroup>
    </Box>
  );
}

export default WithGetCities(SearchBar);
