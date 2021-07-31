import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light my-nav-col">
  <div className="container-fluid">
    <NavLink className="navbar-brand logo text-dark" to="/">Future AI</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-item" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active nav-content" aria-current="page" 
          to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active nav-content" aria-current="page" 
          to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active nav-content" aria-current="page" 
          to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active nav-content" aria-current="page" 
          to="/OurTeam">Our Team</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active nav-content" aria-current="page" 
          to="/ContactUs">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active nav-content" aria-current="page" 
          to="/Newsletter">Newsletter</NavLink>
        </li>
      </ul>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-secondary text-dark" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;