import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg p-3 main-clr">
  <div className="container">
    <NavLink  className={({ isActive }) =>
    isActive ? "navbar-brand fs-1 fw-bold text-white " : "navbar-brand fw-bold fs-1 text-white"} to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className={({ isActive }) =>
    isActive ? "navbar-brand fw-bold text-white active mx-3" : "navbar-brand fw-bold text-white mx-3"} aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) =>
    isActive ? "navbar-brand fw-bold text-white active mx-3" : "navbar-brand fw-bold text-white mx-3"} to="/portfolio">PORTFOLIO</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className={({ isActive }) =>
    isActive ? "navbar-brand fw-bold text-white active mx-3" : "navbar-brand fw-bold text-white mx-3"} to="/contact">CONTACT</NavLink>
        </li>
        
      
        
      </ul>
     
    </div>
  </div>
</nav>

  )
}

export default Navbar