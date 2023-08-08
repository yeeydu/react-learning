import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';
import useFetch from '../hooks/UseFetch';

export default function Definition() {

    //const [word, setWord] = useState();
    //const [notFound, setNotFound] = useState(false)
    //const [error, setError] = useState(false)
    let { search } = useParams(); //
    const navigate = useNavigate();
    //                                            [{}]default empty array and object                                                         {}default parameter
    const { request, data: [{ meanings: word }] = [{}], errorStatus } = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search, {});

    useEffect(()=>{
        request();
    })

    if (errorStatus === 404) {
        return (<NotFound message={'the word was not found'} />)
    }
    if (errorStatus) {
        return (<NotFound message={'Sorry there was an Error'} />)
    }

    return (
        <div>{/*word?.[0]?.meanings ?*/}
            {word ? <>
                <h2>Definition for: {search.toUpperCase()}</h2>
                {word.map((meaning) => {
                    return <p key={uuidv4}>
                        {meaning.partOfSpeech + ': '}
                        {meaning.definitions[0].definition}
                    </p>;
                })}
                <p>Search again:</p>
                <DefinitionSearch />
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