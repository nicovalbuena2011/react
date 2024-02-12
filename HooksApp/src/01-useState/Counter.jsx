import React, { useState } from 'react'

export const Counter = () => {

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const {counter1, counter2, counter3} = state

  const handleEvent = () =>{
    setCounter({
      ...state,
      counter1: counter1 + 1,
      counter2: counter2 + 1
    })
  }
  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <hr />
      <h1>Counter 2: {counter2}</h1>
      <hr />
      <h1>Counter 3: {counter3}</h1>
      <hr />

      <button onClick={ handleEvent } className='btn btn-primary'> +1 </button>   
    </>
  )
}
