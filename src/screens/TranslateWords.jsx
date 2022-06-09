import StreakBar from "../components/StreakBar/StreakBar";
import { Question } from "../features/question/Question";
import { Grid, Box } from "@mui/material";
const TranslateWords = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Question></Question>
      </Box>
      <Grid spacing={1} container>
        <Grid xs item>
          <StreakBar currentStreak={5} />
          {/* <LinearProgress value={80} variant="determinate" title="test" /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default TranslateWords;
