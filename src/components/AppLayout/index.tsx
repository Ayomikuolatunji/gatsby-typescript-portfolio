import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider, Theme } from "@mui/material";
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
    <div className={classes.root}>
      <main className={classes.main}>{children}</main>
    </div>
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
