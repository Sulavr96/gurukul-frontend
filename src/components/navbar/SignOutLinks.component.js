import React from 'react'
//import {NavLink} from 'react-router-dom'

const SignOutLinks = () => {
    return(
        <ul className= "right">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <a className="nav-link" href="">LOGIN</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="">SIGNUP</a>
            </li>

          </ul>
        </div>
 </ul>

    )
}

export default SignOutLinks;