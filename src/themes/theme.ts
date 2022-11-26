import { red, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    appColor: {
      success: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      danger: string;
    };
    appColor: {
      success: string;
    };
  }
}

// A custom theme for this app
export const customTheme = createTheme({
  status: {
    danger: orange[500],
  },
  appColor: {
    success: "#ff0ff",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    // Disable h3 variant
    h3: {
      fontSize: "100px",
    },
  },
});
