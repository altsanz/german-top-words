import './App.css';
import { Words } from './features/words/Words'
import { Question } from './features/question/Question';
import { setNewQuestion } from './features/question/questionSlice'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWords, generateQuestion } from './features/words/wordsSlice';

function App() {
  const dispatch = useDispatch();


  const status = useSelector(state => state.words.status)
  const words = useSelector((state) => state.words.words)
  const question = useSelector(state => state.words.question)
  useEffect(() => {
    dispatch(getWords())
  }, [])

  useEffect(() => {
    if (words && words[1]) {

      dispatch(generateQuestion())


    }
  }, [words])

  useEffect(() => {
    if (question) {
      dispatch(setNewQuestion(question))
    }
  }, [question])

  return (

    <div className="App">
      <header className="App-header">
        <Question></Question>
      </header>
    </div>
  );
}

export default App;
