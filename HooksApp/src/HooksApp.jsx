import React from 'react'
import { Counter } from './01-useState/Counter'
import { CounterCoustomHook } from './01-useState/CounterCoustomHook'

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <Counter/> */}
      <CounterCoustomHook/>
    </>
  )
}
