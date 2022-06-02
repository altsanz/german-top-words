import { Box, Typography } from "@mui/material";

export const TheWord = ({ word }) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h1" component="div" gutterBottom>
        {word}
      </Typography>
    </Box>
  );
};
