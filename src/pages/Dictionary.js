import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dictionary() {

  const [word, setWord] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("state updated", word);
  //
  // }, [word]);
  //no dependency array --> updates for any state change
  //empty dependency array --> execute once
  //passing in data --> it will execute when those state variables are changed

  return (
    <div>
      <input type='text' onChange={(e) => {
        setWord(e.target.value); // this functions are assyncronous so they not garantee to have he value inmidiately
      }} />
      <button onClick={() => {
        navigate('/definition/'+word)
      }}>Search</button>
    </div>
  )
}
