import { DarkMode, LightMode, SearchOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import {
  Box,
  ButtonGroup,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { ThemeMode } from "../../Utils/Data";

function SearchBar({ searchBtnClickFn, changeThemeFn }) {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Box className={styles.parentBox}>
      <FormControl className={styles.form} variant="outlined">
        <InputLabel>Enter Your City...</InputLabel>
        <OutlinedInput
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={changeSearchText}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="searchBtn"
                onClick={() => {
                  searchBtnClickFn(searchText);
                }}
                edge="end"
              >
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          }
          label="Enter Your City..."
        />
      </FormControl>
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

export default SearchBar;
