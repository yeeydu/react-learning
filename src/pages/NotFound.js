import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <>
      <div>Page not Found!</div>
      <Link to={'/dictionary'} >
        <button
          className=' m-2 px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 text-white bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 '
        >Return</button>
      </Link>
    </>

  )
}
