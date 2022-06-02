import { createSelector } from "@reduxjs/toolkit";

const wordsDomain = state => state.words;

export const wordsSelector = createSelector(wordsDomain, (state) => state.words);

export const wordsStatusSelector = createSelector(wordsDomain, state => state.status)