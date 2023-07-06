import React, { useState, useEffect } from 'react'


export default function Dictionary() {

  const [word, setWord] = useState('');
  const [word2, setWord2] = useState('');

  useEffect(() => {
    console.log("state updated", word);

  }, [word]);

  useEffect(() => {
    console.log("state updated", word2);

  }, [word2]);
  //no dependency array --> updates for any state change
  //empty dependency array --> execute once
  //passing in data --> it will execute when those state variables are changed

  return (
    <div>
      <input type='text' onChange={(e) => {
        setWord(e.target.value); // this functions are assyncronous so they not garantee to have he value inmidiately
      }} />
      <h1>Let´s get the definition for {word}</h1>
      <input type='text' onChange={(e) => {
        setWord2(e.target.value); // this functions are assyncronous so they not garantee to have he value inmidiately
      }} />
      <h2>Let´s get the definition for {word}</h2>
    </div>
  )
}
