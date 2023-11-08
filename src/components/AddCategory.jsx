import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) =>{
    setInputValue(target.value)
  }

  const onSubmit = (event)=> {
    event.preventDefault();
    if(inputValue.trim().length <= 1)  return;
    onNewCategory(inputValue.trim().toUpperCase());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} className='w-full'>
        <input className='bg-white p-3 w-full text-gray-600' type="text" placeholder='Buscar gifs' value={inputValue} onChange={onInputChange}/>
    </form>
  )
}