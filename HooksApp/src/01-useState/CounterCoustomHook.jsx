import React from 'react'
import { useCounter } from '../Hooks/useCounter'

export const CounterCoustomHook = () => {

  const { value, increment, decrement, reset } = useCounter()

  return (
    <>
      <h2>Counter with hook: {value}</h2>
      <hr />
      <button onClick={ increment } className='btn btn-danger mx-2'>+1</button>
      <button onClick={ reset } className='btn btn-danger mx-2'>Reset</button>
      <button onClick={ decrement } className='btn btn-danger mx-2'>-1</button>
    </>
  )
}
