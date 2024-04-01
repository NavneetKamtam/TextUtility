import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.contact}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div className="form-check form-switch my-2">
  <input onClick={props.toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark':'light'} mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired ,
    contact: PropTypes.number.isRequired
  };

//   ByDefault vaules of are passed as props are:-
Navbar.defaultProps = {
    title: "Set the Titel" ,
    contact: 9373141747
}