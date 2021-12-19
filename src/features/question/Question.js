import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { generateQuestion } from "../words/wordsSlice";
import TheWord from "../../components/TheWord";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export function Question() {
  const [buttonColors, setButtonColors] = useState([
    "primary",
    "primary",
    "primary",
  ]);
  const question = useSelector((state) => state.question);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generateQuestion());
  }, []);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(question.germanWord);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  }, [question]);

  function selectOption(selectedOption) {
    const newColorButtons = question.possibleTranslations.map(
      (option, index) => {
        if (option === selectedOption) {
          if (selectedOption === question.correctTranslation) {
            return "success";
          } else if (selectedOption !== question.correctTranslation) {
            return "error";
          }
        } else if (option === question.correctTranslation) {
          return "success";
        } else {
          return "primary";
        }
      }
    );

    setButtonColors(newColorButtons);
    setTimeout(() => {
      setButtonColors(["primary", "primary", "primary"]);
      dispatch(generateQuestion());
    }, 2000);
  }

  return (
    <Box sx="{{ flexGrow: 1 }}">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TheWord
            word={
              (question.gender ? question.gender + " " : "") +
              question.germanWord
            }
          ></TheWord>
        </Grid>
        {question.possibleTranslations.map((option, i) => (
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color={buttonColors[i]}
              onClick={() => selectOption(option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
