import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks.component'
import SignOutLinks from './SignOutLinks.component'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="" >GURUKUL</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <hr />
        
        <SignOutLinks />

      </div>
      <hr />
    </nav>
  )
}
export default Navbar;