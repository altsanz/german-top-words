import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";

export const TheWord = forwardRef(({ word }, ref) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h1" component="div" gutterBottom ref={ref}>
        {word}
      </Typography>
    </Box>
  );
});
