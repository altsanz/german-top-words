import { useDispatch, useSelector } from "react-redux";
import {
    wordsSelector
} from "../words/words.selectors";
import { questionSelector } from "./question.selectors";
import { setNewQuestion } from "./questionSlice";

function generateRandomNumber() {
    return Math.round(Math.random() * 100);
}


export const useQuestion = () => {
    const words = useSelector(wordsSelector)
    const question = useSelector(questionSelector)
    const dispatch = useDispatch();


    function generateQuestion() {
        if (words && words[1]) {
            const randomWordIndex = generateRandomNumber();
            const randomly = () => (Math.random() >= 0.5 ? 1 : -1);

            let newQuestion = {
                germanWord: words[randomWordIndex].german,
                possibleTranslations: [
                    words[generateRandomNumber()].english,
                    words[randomWordIndex].english,
                    words[generateRandomNumber()].english,
                ].sort(randomly),
                correctTranslation: words[randomWordIndex].english,
            };

            dispatch(setNewQuestion(newQuestion))
        }
    }

    return {
        question,
        generateQuestion,
        // checkAnswer
    }
}