import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">UseContext</Link> */}
          <button className="navbar-toggler light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" fillRule='evenodd'/>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={ ({isActive})=> {console.log(isActive)}}
                  end
                  >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/About"}
                  className={ ({isActive})=> {`nav-link ${ isActive ? 'active' : ''}`}}
                  >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" aria-disabled="true">Login</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
