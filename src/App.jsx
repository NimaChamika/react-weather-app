import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { ThemeMode } from "./utils/data";

export const ThemeColors = {
  backgroundColor: {
    light: "rgba(255, 255, 255, 255)",
    dark: "rgba(0, 0, 0, 255)",
  },
  appBarColor: {
    light: "rgba(255,255,255,255)",
    dark: "rgba(33,33,33,255)",
  },
  primaryTextColor: {
    light: "rgba(0, 0, 0, 255)",
    dark: "rgba(255,255,255,255)",
  },
  secondaryTextColor: {
    light: "rgba(0, 0, 0, 255)",
    dark: "rgba(255,255,255,255)",
  },
};

function App() {
  const [themeMode, setThemeMode] = useState(ThemeMode.LIGHT);

  console.log(themeMode);

  const changeTheme = () => {
    const newTheme =
      themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    setThemeMode(newTheme);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: "rgba(206, 60, 54,255)",
            light: "rgba(206, 60, 54,255)",
            dark: "rgba(206, 60, 54,255)",
          },
          secondary: {
            main: "rgba(206, 60, 54,255)",
          },
          icon: {
            main:
              themeMode === ThemeMode.LIGHT
                ? ThemeColors.primaryTextColor.light
                : ThemeColors.primaryTextColor.dark,
          },
          background: {
            default:
              themeMode === ThemeMode.LIGHT
                ? ThemeColors.backgroundColor.light
                : ThemeColors.backgroundColor.dark,
            paper:
              themeMode === ThemeMode.LIGHT
                ? ThemeColors.backgroundColor.light
                : ThemeColors.backgroundColor.dark,
          },
          text: {
            primary:
              themeMode === ThemeMode.LIGHT
                ? ThemeColors.primaryTextColor.light
                : ThemeColors.primaryTextColor.dark,
            secondary:
              themeMode === ThemeMode.LIGHT
                ? ThemeColors.secondaryTextColor.light
                : ThemeColors.secondaryTextColor.dark,
            neutral: "rgba(255, 0, 0,255)",
          },
        },
      }),
    [themeMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Typography color="text.primary">Weather Data</Typography>
      <Button color="primary" onClick={changeTheme}>
        Theme
      </Button>
    </ThemeProvider>
  );
}

export default App;
