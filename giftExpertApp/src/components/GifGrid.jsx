import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({categorie}) => {

  const [images, setimages] = useState([])

  const getImages = async() =>{
    const data = await getGifs(categorie)
    setimages(data)
  }


  useEffect(() => {  
    getImages()
  }, [])
  
  return (
    <div>
      <h3>{categorie}</h3>
      {
        images.map(element =>{
          return(           
            <GifItem {...element} key={element.id}/>
          )
        })
      }
      
    </div>  
  )
}
