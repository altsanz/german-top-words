import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TheWord } from "../../components/TheWord";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useQuestion } from "./question.hooks";
import { wordsStatusSelector } from "../words/words.selectors";
import { motion, AnimatePresence } from "framer-motion";
import { useMatch, useLocation } from "react-router-dom";
const MotionTheWord = motion(TheWord);

export function Question() {
  const wordsStatus = useSelector(wordsStatusSelector)
  const path = useLocation();
  const isTranslateRoute = useMatch('/translate-the-word')
  const [buttonColors, setButtonColors] = useState([
    "primary",
    "primary",
    "primary",
  ]);

  useEffect(() => {
    return () => clearQuestion()
  }, [])

  const { question, generateQuestion, clearQuestion } = useQuestion();
  useEffect(() => {
    if (wordsStatus === 'success') generateQuestion();
  }, [wordsStatus]);

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
      generateQuestion();
    }, 2000);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AnimatePresence exitBeforeEnter>
            {question && <MotionTheWord key={question.germanWord}
              initial={{ opacity: 0, y: "-10px" }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{ opacity: 0 }}

              word={
                (question.gender ? question.gender + " " : "") +
                question.germanWord
              }
            />}
            {wordsStatus === 'loading' && 'Loading...'}
            {wordsStatus === 'failed' && 'Couldn\'t retrieve list of words'}
          </AnimatePresence>
        </Grid>
        {/* <AnimatePresence exitBeforeEnter layout> */}

        {question.possibleTranslations.map((option, i) => (
          <Grid component={motion.div} layout item xs={4} key={option + i}
          >
            <Button
              variant="outlined"
              color={buttonColors[i]}
              onClick={() => selectOption(option)}

            >
              {option}
            </Button>
          </Grid>
        ))}

        {/* </AnimatePresence> */}
      </Grid>
    </Box>
  );
}
