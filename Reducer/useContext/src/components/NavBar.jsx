import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/'} className={({isActive}) => {return ( 'nav-link' + (isActive ? 'active text-decoration-none' : '') )} } end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/login'} className={({isActive}) => {return ( 'nav-link' + (isActive ? 'active text-decoration-none' : '') )}}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/about'} className={({isActive}) => {return ( 'nav-link' + (isActive ? 'active text-decoration-none' : '') )}}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
