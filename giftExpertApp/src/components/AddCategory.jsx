import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {
  
  const [inputValue, setinputValue] = useState('');
  const onInputChange = ({target}) => {
    setinputValue(target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    const input = inputValue.trim();
    if (input.length <= 1) return
    
    onAddCategory(inputValue);

    setinputValue('');
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input type="text" name="" id=""  placeholder='Buscar gifts' value={inputValue} onChange={onInputChange}/>

    </form>

  )
}
