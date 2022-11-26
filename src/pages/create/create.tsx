import { Typography, Button, Container, Box, CssBaseline } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";

type viewport = "lg" | "md" | "sm";

interface types {
  viewport: viewport;
}

export default function Create({ viewport }: types) {
  const theme = useTheme();
  console.log(theme.status.danger);
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
        >
          Submit
        </Button>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </>
  );
}
