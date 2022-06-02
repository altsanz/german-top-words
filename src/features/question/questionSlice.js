

import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        germanWord: '',
        possibleTranslations: [],
        correctTranslation: ''
    },

    reducers: {
        setNewQuestion: (state, action) => {
            state.germanWord = action.payload.germanWord;
            state.possibleTranslations = action.payload.possibleTranslations;
            state.correctTranslation = action.payload.correctTranslation;
        },
    }
})

export const { setNewQuestion } = questionSlice.actions;

export default questionSlice.reducer;