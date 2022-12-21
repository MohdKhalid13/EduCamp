import React from "react";
import { NavLink } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";


function Navbar(props) {

  function search()
  {
      let x = document.getElementById("text").value;
      let url ='https://www.google.com/?q='+ x;
      window.open(url,'_blank');
  }

    return (
<>

  <nav className={`navbar navbar-expand-lg bg-light navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand"><FaGraduationCap className="cap" />EduCamp</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./TextForm">TextForm</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./Donate">Donate Us </NavLink>
        </li>
        </ul>
        <div className={`form-check form-switch me-5 ms-5 mt-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="form">
           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
           <label className="form-check-label" id="name" htmlFor="flexSwitchCheckChecked">{`${props.mode === 'dark' ? 'Enable LightMode' : 'Enable DarkMode'}`}</label>
        </div> 
       <form className="d-flex" id="bar" role="search">
           <input className="form-control me-2" type="search" placeholder="Search" id="text" autoComplete="off" aria-label="Search"/>
           <button className="btn btn-outline-success" onClick={search} type="submit">Search</button>
       </form>

    </div>
  </div>
  </nav>

</>

    );
  }

export default Navbar;