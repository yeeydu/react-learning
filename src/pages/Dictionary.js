import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Dictionary() {


  return (
    <>
      <p className='flex justify-center mb-5'>Search for a word definition</p>
      <div className='flex justify-center'>
        <DefinitionSearch />
      </div>
    </>
  )
}
