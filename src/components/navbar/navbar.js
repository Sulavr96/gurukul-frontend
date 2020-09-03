import React from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="" >GURUKUL</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>

      </div>
      <hr />
    </nav>
  )
}
export default Navbar;