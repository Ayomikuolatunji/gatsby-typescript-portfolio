import {
  Typography,
  Button,
  Container,
  CssBaseline,
  Theme,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

type viewport = "lg" | "md" | "sm";

interface types {
  viewport: viewport;
}

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.status.check,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.status.danger,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.error.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.appColor.success,
      color: theme.status.check,
    },
  },
}));

export default function Create({ viewport }: types) {
  const style = useStyles();
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth={viewport}>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a new note
        </Typography>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            console.log("You clicked me");
          }}
          className={style.btn}
        >
          Submit
        </Button>
      </Container>
    </>
  );
}
