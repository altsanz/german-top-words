

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    germanWord: '',
    possibleTranslations: [],
    correctTranslation: ''
};
export const questionSlice = createSlice({
    name: 'question',
    initialState: initialState,

    reducers: {
        setNewQuestion: (state, { payload }) => {
            state.germanWord = payload.germanWord;
            state.possibleTranslations = payload.possibleTranslations;
            state.correctTranslation = payload.correctTranslation;
        },
        clearQuestion: state => {
            state.germanWord = initialState.germanWord;
            state.possibleTranslations = initialState.possibleTranslations;
            state.correctTranslation = initialState.correctTranslation;
        }
    }
})

export const { setNewQuestion, clearQuestion } = questionSlice.actions;

export default questionSlice.reducer;