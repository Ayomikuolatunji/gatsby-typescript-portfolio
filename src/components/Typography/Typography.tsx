import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TypographyComponent() {
  return (
    <Box>
      <Typography variant="h1" color="secondary" gutterBottom>
        TypographyComponent
      </Typography>
      <Typography variant="h2">TypographyComponent</Typography>
      <Typography variant="h4">TypographyComponent</Typography>
      <Typography variant="h5" noWrap>TypographyComponent</Typography>
      <Typography variant="button" color="primary" gutterBottom>
        TypographyComponent
      </Typography>
    </Box>
  );
}
