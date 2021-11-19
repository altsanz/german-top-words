import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./features/words/wordsSlice";
import questionReducer from "./features/question/questionSlice";
export default configureStore({
    reducer: {
        words: wordsReducer,
        question: questionReducer
    }
})