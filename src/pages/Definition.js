import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { useParams } from 'react-router-dom';

export default function Definition() {

    const [word, setWord] = useState();
    let {search} = useParams();

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+search)
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
            });
    }, [])

    return (
        <div>
            <h1>Here is the definition:</h1>
            {word?  word?.map((meaning) => {
                return <p key={uuidv4}>
                    {meaning.partOfSpeech + ': '}
                    {meaning.definitions[0].definition}
                </p>;
            }) : <p>Loadding...</p> }
        </div>
    )
}


// async function Word() {
//     const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
//     const word = await response.json();
//     console.log(word);
// }