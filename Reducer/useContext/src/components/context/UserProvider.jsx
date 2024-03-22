import React, { useState } from 'react'
import { Usercontext } from './UserContext'

// const user = {
//   id: 123,
//   name: 'nicolas',
//   email: 'nicolas@nicolas.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setuser] = useState()

  return (
    <Usercontext.Provider value={{user, setuser}}>
      { children }
    </Usercontext.Provider>
  )
}
