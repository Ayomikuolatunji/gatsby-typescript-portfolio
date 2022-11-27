import React, { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppLayout } from "../components";
import { customTheme } from "../themes/theme";

const wrapPageElement = ({ element }: { element: ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppLayout>{element}</AppLayout>
    </ThemeProvider>
  );
};

export default wrapPageElement;
