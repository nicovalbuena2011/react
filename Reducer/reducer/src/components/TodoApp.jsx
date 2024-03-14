import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'


const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'recilectar la piedra del alma',
  //   done: true
  // },
  // {
  //   id: new Date().getTime() + 100,
  //   description: 'recilectar la piedra del infinito',
  //   done: false
  // }
]
const init = ()=> {
  return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
}

export const TodoApp = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(state))
  }, [state])
  

  const onNewTodo = (todo = {}) =>{
    // console.log(todo)
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch(action);
  }
  return (
    <>
      <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className='list-group'>
            {
              <TodoList todos = {state}/>
            }
            
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm onNewTodo = {onNewTodo}/>
        </div>
      </div>
    </>
  )
}
