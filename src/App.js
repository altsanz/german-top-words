import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWords } from "./features/words/wordsSlice";
import { Route, Routes, Navigate } from "react-router-dom";
import Drawer from "./Drawer";
import TranslateWords from "./screens/TranslateWords";
import GuessTheGender from "./screens/GuessTheGender";
import { Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords());
  }, []);


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
