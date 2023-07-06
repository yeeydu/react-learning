import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound';

export default function Definition() {

    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false)
    let { search } = useParams(); //
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
            .then((response) => {
                if (response.status === 404) {
                    navigate('/404');
                } else {
                    return response.json()
                }
            })
            .then((data) => {
                setWord(data[0].meanings);
            });
    }, [])

    if (notFound === true) {
        navigate('/404')
    }
    return (
        <div>
            {word ? <>
                <h2>Definition for: {search.toUpperCase()}</h2>
                {word?.map((meaning) => {
                    return <p key={uuidv4}>
                        {meaning.partOfSpeech + ': '}
                        {meaning.definitions[0].definition}
                    </p>;
                })}
            </>
                : <p>Loadding...</p>}
        </div>
    )
}


// async function Word() {
//     const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
//     const word = await response.json();
//     console.log(word);
// }