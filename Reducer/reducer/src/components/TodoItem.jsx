import React from 'react';

export const TodoItem = ({ todo }) => {
  return (
    <li key={todo.id} className='list-group-item d-flex align-items-center justify-content-between'>
      <span>{todo.description}</span>
      <span className={`badge rounded-pill bg-${todo.done ? 'success' : 'warning '}`}>
        {todo.done ? 'Completado' : 'Pendiente'}
      </span>
      <button className='btn btn-outline-danger btn-sm mx-2'>Borrar</button>
    </li>
  );
};

