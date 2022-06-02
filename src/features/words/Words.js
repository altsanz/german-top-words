
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setWords } from './wordsSlice';

export const Words = () => {

    const words = useSelector(state => state.words.words)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWords(['hola', ' que tal']))
    }, [])
    function handleOnClick() {
        console.log('hola');
        dispatch(setWords(['hola', ' que tal', 'otramas']))
    }
    return (<div>
        <button onClick={handleOnClick}>Hola</button>
        {words && words.map(word => (<div>{word}</div>))}
    </div>)
}