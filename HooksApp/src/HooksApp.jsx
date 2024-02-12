import React from 'react'
import { Counter } from './01-useState/Counter'
import { CounterCoustomHook } from './01-useState/CounterCoustomHook'
import { SimpleForm } from './02-useState/SimpleForm'

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <Counter/> */}
      {/* <CounterCoustomHook/> */}
      <SimpleForm/>
    </>
  )
}
