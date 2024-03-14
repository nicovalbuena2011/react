import React, { useState } from 'react'

export const TodoForm = ({onNewTodo}) => {3

 const [todo, settodo] = useState('');


 const handleSubmit = (event) =>{
  event.preventDefault();
  if (todo.length <= 1) return;

  const newTodo = {
    id: new Date().getTime(),
    done: false,
    description: todo
  }
  // console.log(newTodo)
  onNewTodo(newTodo);
  settodo('');
 }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder='¿Que quieres agregar?'
        className='form-control'
        value={todo}
        onChange={ (e) => settodo(e.target.value)}
      />
      <button type='submit' className='btn btn-primary mt-2'>
        Agregar
      </button>
    </form>
  )
}
