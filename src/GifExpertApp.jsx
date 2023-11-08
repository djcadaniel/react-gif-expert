import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['goku'])
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
  }

  return (
    <>
      <div className='p-5 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl pb-5 text-gray-800'>GifExpertApp</h1>
        <AddCategory onNewCategory={onAddCategory} />
        {
          categories.map(category => (
            <GifGrid  
              key={category} 
              category={category} 
            />
          ))
        }
      </div>
    </>
  )
}