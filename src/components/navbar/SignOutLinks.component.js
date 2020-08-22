import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'reactstrap';

const SignOutLinks = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="" >GURUKUL</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
              <i className="fa fa-bars"></i>
        </button>
        <ul className="right">



          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

              <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Login/Signup</Link>

              <ul className="navbar-nav ml-auto nav-flex-icons">
                <i className="fa fa-user fa-2x"></i>
              </ul>

            </ul>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default SignOutLinks;