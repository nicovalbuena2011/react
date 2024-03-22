import React from 'react'
import { useContext } from 'react'
import { Usercontext } from './context/UserContext';
import { json } from 'react-router-dom';

export const LoginPage = () => {
  
  const { user } = useContext(Usercontext);
  
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>
        {JSON.stringify(user?.name, null, 2)}
      </pre>
    </>
  )
}
