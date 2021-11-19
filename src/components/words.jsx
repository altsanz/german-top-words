import { useQuery } from "react-query";
import axios from "../http.common";

export default function Words() {

    const { isLoading, data } = useQuery('words', () => axios.get('/words'))
    console.log(data);
    return (<div>
        {data.data && data.data.map(word => (<div>{word.german}</div>))}
    </div>)
}