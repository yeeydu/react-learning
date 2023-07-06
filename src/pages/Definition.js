import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Definition() {

    const [word, setWord] = useState();

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/helicopter")
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
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