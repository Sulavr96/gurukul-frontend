import React from 'react'
import Navbar from './navbar';

const SignInLinks = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
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
                            <li className="nav-item">
                                <a className="nav-link" href="">STUDENTS</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="">ASSIGNMENTS</a>
                            </li>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        PROFILE
                        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Account</a>
                                        <a className="dropdown-item" href="#">Setting</a>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </ul>

                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <i className="fa fa-user fa-3x"></i>
                        </ul>


                    </div>
                </ul>
            </div>
        </nav>


    )
}

export default SignInLinks;