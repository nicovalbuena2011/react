import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], deleteTodo, updateTodo }) => {
  // console.log(onDeleteTodo)
  return (
    <>
      {
        todos.map( todo => (
          <TodoItem todo = {todo} key={todo.id} deleteTodo = {deleteTodo} updateTodo = {updateTodo}/>
        ))
      }
    </>
  )
}
