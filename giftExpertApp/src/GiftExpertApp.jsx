import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch','Dragon Ball'])
  
  const onAddCategory = (categorie)=>{

    if(categories.includes(categorie)) return;
    setcategories([...categories, categorie])
  } 

  return (
    <>

      <h1>GiftExpertApp</h1>
 
      <AddCategory onAddCategory = {onAddCategory} />



        {
          categories.map((categorie)=>(
            <GifGrid categorie = {categorie} key = {categorie}/>
          ))
        }
    

    </>
  )
}
