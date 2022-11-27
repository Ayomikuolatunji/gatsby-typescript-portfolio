import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { customTheme } from "../../themes/theme";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  main: {
    backgroundColor: theme.palette.background.default,
  },
}));

const LayoutComponent: FC<PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.main}>{children}</Box>
    </Box>
  );
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <LayoutComponent>{children}</LayoutComponent>
    </ThemeProvider>
  );
};

export default Layout;
