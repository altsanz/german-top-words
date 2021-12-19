import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function generateRandomNumber() {
  return Math.round(Math.random() * 100);
}

export const getWords = createAsyncThunk(
  "words/getWords",
  async (dispatch, getState) => {
    return await fetch("http://localhost:3001/words").then((res) => res.json());
  }
);
export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
    question: {
      germanWord: "",
      possibleTranslations: [],
      correctTranslation: "",
    },
    status: null,
  },
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    },
    generateQuestion: (state) => {
      if (state.words && state.words[1]) {
        let words = state.words;
        const randomWordIndex = generateRandomNumber();
        const randomly = () => (Math.random() >= 0.5 ? 1 : -1);

        state.question = {
          germanWord: words[randomWordIndex].german,
          possibleTranslations: [
            words[generateRandomNumber()].english,
            words[randomWordIndex].english,
            words[generateRandomNumber()].english,
          ].sort(randomly),
          correctTranslation: words[randomWordIndex].english,
        };
      }
    },
  },
  extraReducers: {
    [getWords.pending]: (state, action) => {
      state.status = "loading";
    },
    [getWords.fulfilled]: (state, action) => {
      state.words = action.payload;
      state.status = "success";
    },
    [getWords.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { setWords, generateQuestion } = wordsSlice.actions;

export default wordsSlice.reducer;
