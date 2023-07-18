import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition() {

    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(false)
    let { search } = useParams(); //
    const navigate = useNavigate();


    useEffect(() => {
        //const url = 'http://httpstat.us/500'
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;

        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    //console.log(response.status)
                    navigate('/404');
                } else if (!response.ok) {
                    setError(true);
                    setNotFound(true);
                    throw new Error('something went wrogn')
                }
                else {
                    return response.json()
                }
            })
            .then((data) => {
                setWord(data[0].meanings);
            }).catch(() => {
                console.log(error.message);
            });
    }, [])

    if (notFound === true) {
        <NotFound message={'the word was not found'}/>
    }
    if (error === true) {
        <NotFound message={'Sorry there was an Error'}/>
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
                <p>Search again:</p>
                <DefinitionSearch/>
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