import React from 'react';

export const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  
  const handleSubmit = (event) =>{
    // ondonDeleteTodo(todo)
    event.preventDefault();
    deleteTodo(todo);
  }

  const updateStatus = (event) =>{
    event.preventDefault();
    updateTodo(todo)
  }
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <div>
        <span className={` ${todo.done && 'text-decoration-line-through'} `}>{todo.description}</span>
      </div>
      <div>
        <button className={`btn rounded btn-${todo.done ? 'success' : 'warning'} mx-2`}
        onClick={updateStatus}
        >
          {todo.done ? 'Completado' : 'Pendiente'}
        </button>
        <button 
          className='btn btn-outline-danger btn-sm ml-2'
          onClick={handleSubmit}
          >Borrar
          
        </button>
      </div>
    </div>
  );
};

