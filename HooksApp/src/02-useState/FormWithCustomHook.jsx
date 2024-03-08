import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import { UseForm } from '../Hooks/UseForm'

export const FormWithCustomHook = () => {


  const { form, handleForm, onResetForm, username, email, password } = UseForm({
    username: '',
    email: '',
    password: ''
  }) 
  

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input 
        type="text"
        className='form-control'
        placeholder='Username'
        name='username' 
        value={username}
        onChange={handleForm}
      />
      <input 
        type="email"
        className='form-control mt-2'
        placeholder='email'
        name='email' 
        value={email}
        onChange={handleForm}
      />
      <input 
        type="password"
        className='form-control mt-2'
        placeholder='password'
        name='password' 
        value={password}
        onChange={handleForm}
      />
      <button className='btn btn-primary mt-2' onClick={onResetForm}>Reset</button>

      {
        (username === 'javier' && <Message/>)
      }
    </>
  )
}
