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

  const onDeleteTodo = (todo = {}) =>{
    
    const action = {
      type: '[TODO] Delete Todo',
      payload: todo.id
    }
    dispatch(action);
  }

  const upDateState = (todo = {}) =>{
    const action = {
      type: '[TODO] UpdateState todo',
      payload: todo
    }
    dispatch(action);
  }

  return (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">TodoApp: {10} <small className="text-muted">Pendientes: {2}</small></h1>
            <hr />
            <div className="row">
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Lista de Tareas</h4>
                    <hr />
                    <TodoList todos={state} deleteTodo = {onDeleteTodo} updateTodo = {upDateState} />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Agregar Tarea</h4>
                    <TodoForm onNewTodo={onNewTodo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
