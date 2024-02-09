import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

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

      <ol>

        {
          images.map(element =>{
            return(           
              <li key={element.id}>{element.title}</li>
            )
          })
        }
      </ol>
    </div>
    
  )
}
