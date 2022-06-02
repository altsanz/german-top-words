import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getWords = createAsyncThunk(
  "words/getWords",
  async (dispatch, getState) => {
    try {
      console.log('holis')
      return await fetch("http://localhost:3001/words").then((res) => res.json());
    } catch (err) {
      console.log(err);


    }
  }
);
export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
    status: null,
  },
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    }
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
