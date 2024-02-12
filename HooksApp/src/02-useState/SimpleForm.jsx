import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {


  const [form, setform] = useState({
    username: 'nicolas',
    email: 'nicolas@nicolas.com'
  })

  const {username, email} = form

  const handleForm = ({target}) =>{
    const { name, value } = target;

    setform({
      ...form,
      [name]: value
    })
  }

  //  Valida cual componente cambia y dispara acciones dependiendo de eso, util para peticiones http

  // useEffect(() => {
  //   console.log('useefect')
  // }, [])

  // useEffect(() => {
  //   console.log('cambio el nombre')
  // }, [username])

  // useEffect(() => {
  //   console.log('cambio el email')
  // }, [email])
  

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

      {
        (username === 'javier' && <Message/>)
      }
    </>
  )
}
