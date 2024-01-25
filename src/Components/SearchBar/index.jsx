import { SearchOutlined } from "@mui/icons-material";

import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ searchBtnClickFn }) {
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
    </Box>
  );
}

export default SearchBar;
