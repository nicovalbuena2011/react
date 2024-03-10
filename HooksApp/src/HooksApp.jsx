import React from 'react'
import { Counter } from './01-useState/Counter'
import { CounterCoustomHook } from './01-useState/CounterCoustomHook'
import { SimpleForm } from './02-useState/SimpleForm'
import { FormWithCustomHook } from './02-useState/FormWithCustomHook'
import { MultipleCustoomHook } from './03-examples/MultipleCustoomHook'

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <Counter/> */}
      {/* <CounterCoustomHook/> */}
      <MultipleCustoomHook/>
    </>
  )
}
