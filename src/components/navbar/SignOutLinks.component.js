import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'reactstrap';

const SignOutLinks = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="" >GURUKUL</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
              <i className="fa fa-bars"></i>
        </button>
        <ul className="right">


          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGNUP</Link>

              <ul className="navbar-nav ml-auto nav-flex-icons">
                <i className="fa fa-user"></i>
              </ul>

            </ul>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default SignOutLinks;