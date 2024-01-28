import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { ThemeMode } from "./Utils/Data";
import Home from "./Components/Home";

function App() {
  const [themeMode, setThemeMode] = useState(ThemeMode.LIGHT);

  // eslint-disable-next-line no-unused-vars
  const changeTheme = (newTheme) => {
    setThemeMode(newTheme);
  };

  const theme = useMemo(
    () => createTheme(getThemeData(themeMode)),
    [themeMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home changeThemeFn={changeTheme} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

const ThemeColors = {
  backgroundColor: {
    light: "rgb(244, 245, 253)",
    dark: "rgb(45, 45, 45)",
  },
  paperColor: {
    light: "rgb(243, 236, 255)",
    dark: "rgb(91, 94, 106)",
  },
  themeBtnColor: {
    active: "rgb(41, 204, 151)",
    disable: "rgb(100, 100, 100)",
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

function getThemeData(themeMode) {
  return {
    palette: {
      mode: themeMode,
      primary: {
        main: "rgba(0, 0, 0, 255)",
        light: "rgba(0, 0, 0, 255)",
        dark: "rgba(255,255,255,255)",
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
            ? ThemeColors.paperColor.light
            : ThemeColors.paperColor.dark,
        lightThemeBtn:
          themeMode === ThemeMode.LIGHT
            ? ThemeColors.themeBtnColor.active
            : ThemeColors.themeBtnColor.disable,
        darkThemeBtn:
          themeMode === ThemeMode.LIGHT
            ? ThemeColors.themeBtnColor.disable
            : ThemeColors.themeBtnColor.active,
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
    typography: {
      fontFamily: "Roboto Slab",
    },
  };
}

export { getThemeData };
