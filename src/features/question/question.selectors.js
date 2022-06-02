import { createSelector } from "@reduxjs/toolkit";


export const questionDomain = state => state.question;
export const questionSelector = createSelector(questionDomain, (questionDomain) => {
    debugger;
    return questionDomain
})