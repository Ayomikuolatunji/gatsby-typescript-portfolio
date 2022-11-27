import { red, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
export const customTheme = createTheme({
  spacing: 8,
  status: {
    danger: "yellow",
    check: "purple",
    main: "white",
  },
  appColor: {
    success: "blue",
    light: "white",
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      check: string;
      main: string;
    };
    appColor: {
      success: string;
      light: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      danger: string;
      check: string;
      main: string;
    };
    appColor: {
      success: string;
      light: string;
    };
  }
}

/*=============================================
=            Typography            =
=============================================*/

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

/*=====  End of Typography  ======*/

/*=============================================
=        Palette             =
=============================================*/
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

/*=====  End of  Palette  ======*/
