import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { TheWord } from "../components/TheWord";

const GuessTheGender = () => {
  return (
    <Grid container spacing={2} className="">
      <Grid item xs={12}>
        <TheWord word={"hola"}></TheWord>
      </Grid>
      {["die", "der", "das"].map((option, i) => (
        <Grid item xs={4} className="" key={option}>
          <Button
            variant="outlined"
            // color={buttonColors[i]}
            // onClick={() => selectOption(option)}
          >
            {option}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default GuessTheGender;
