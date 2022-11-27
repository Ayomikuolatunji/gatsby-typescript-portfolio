import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveDrawer } from "../../components";

export default function Email() {
  const theme = useTheme();
  console.log(theme);
  return (
    <ResponsiveDrawer>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Typography sx={{ color: (theme) => theme.palette.customGreen?.dark }}>
          Custom
        </Typography>
      </Box>
    </ResponsiveDrawer>
  );
}
