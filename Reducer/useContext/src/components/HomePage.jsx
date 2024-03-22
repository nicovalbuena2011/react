import React, { useState } from 'react'
import { useContext } from 'react'
import { Usercontext } from './context/UserContext'



export const HomePage = () => {
  const { user, setuser } = useContext(Usercontext)
  // const [context, setcontext] = useState(user)
  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <pre>
        {JSON.stringify(user?.name, null, 2)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={()=> {setuser({
          id: 123,
          name: 'nicolas',
          email: 'nicolas@nicolas.com'
        })}}
      >
        Set User
      </button>

    </>
  )
}
