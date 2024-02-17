import { DarkMode, LightMode, SearchOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import {
  Autocomplete,
  Box,
  ButtonGroup,
  IconButton,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import styles from "./SearchBar.module.css";
import { ThemeMode } from "../../Utils/Data";
import WithGetCities from "./WithGetCities";

function SearchBar({
  searchBtnClickFn,
  changeThemeFn,
  cityList,
  callGetCitiesAPI,
}) {
  // #region HOOKS
  const theme = useTheme();

  const [cityLst, setCityLst] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (cityList.length > 0) {
      setCityLst(cityList);
    }
  }, [cityList]);

  const searchInputThrottleFnRef = useRef(null);

  useEffect(() => {
    searchInputThrottleFnRef.current = searchInputThrottle();
  }, []);

  // #endregion

  // #region UTIL FNS
  function searchInputThrottle(delay = 1500) {
    let shouldWait = false;
    let waitingArgs;

    const timeOutFn = () => {
      if (waitingArgs === null) {
        shouldWait = false;
      } else {
        callGetCitiesAPI(waitingArgs);
        waitingArgs = null;
        setTimeout(timeOutFn, delay);
      }
    };

    return (value) => {
      if (shouldWait) {
        waitingArgs = value;
        return;
      }

      callGetCitiesAPI(value);
      shouldWait = true;

      setTimeout(timeOutFn, delay);
    };
  }
  // #endregion

  return (
    <Box className={styles.parentBox}>
      <Box className={styles.searchParentBox}>
        <Autocomplete
          value={selectedCity}
          onChange={(event, newValue) => {
            setSelectedCity(newValue);
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={cityLst}
          getOptionLabel={(option) => {
            return option;
          }}
          renderOption={(props, option) => <li {...props}>{option}</li>}
          sx={{
            width: "80%",
          }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Your City..."
              onChange={(e) => {
                setSelectedCity(e.target.value);
                searchInputThrottleFnRef.current(e.target.value);
              }}
              inputProps={{
                ...params.inputProps,
                style: {
                  padding: 0,
                },
              }}
            />
          )}
        />
        <IconButton
          aria-label="searchBtn"
          onClick={() => {
            searchBtnClickFn(selectedCity);
          }}
          edge="end"
        >
          <SearchOutlined />
        </IconButton>
      </Box>

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
