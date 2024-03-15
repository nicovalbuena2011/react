import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>about</Link>
      <Link to={'/login'}>login</Link>
    </>
  )
}
