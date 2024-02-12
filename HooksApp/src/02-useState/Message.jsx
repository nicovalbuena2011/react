import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('componente montado')
  
    return () => {
      console.log('componente desmontado')
    }
  }, [])
  

  return (
    <>
      <h1>EL usuario ya existe!!</h1>
    
    </>
  )
}
