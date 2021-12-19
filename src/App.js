import "./App.css";
import { setNewQuestion } from "./features/question/questionSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWords, generateQuestion } from "./features/words/wordsSlice";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Drawer from "./Drawer";
import TranslateWords from "./screens/TranslateWords";
import GuessTheGender from "./screens/GuessTheGender";
import { Box } from "@mui/material";
function App() {
  const dispatch = useDispatch();

  const words = useSelector((state) => state.words.words);
  const question = useSelector((state) => state.words.question);

  useEffect(() => {
    dispatch(getWords());
  }, []);

  useEffect(() => {
    if (words && words[1]) {
      dispatch(generateQuestion());
    }
  }, [words]);

  useEffect(() => {
    if (question) {
      dispatch(setNewQuestion(question));
    }
  }, [question]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ flexShrink: 0, flexBasis: "160px" }}>
        <Drawer />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
        }}
      >
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/guess-the-gender" />}
              ></Route>
              <Route
                path="/translate-the-word"
                element={<TranslateWords className="win" />}
              />
              <Route path="/guess-the-gender" element={<GuessTheGender />} />
            </Routes>
          </header>
        </div>
      </Box>
    </Box>
  );
}

export default App;
