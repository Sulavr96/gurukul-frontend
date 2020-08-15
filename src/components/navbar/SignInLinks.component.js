import React from 'react'
//import {NavLink} from 'react-router-dom'

const SignInLinks = () => {
    return (
        <ul className="right">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">STUDENTS</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="">ASSIGNMENTS</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PROFILE
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Account</a>
                            <a class="dropdown-item" href="#">Setting</a>
                            <a class="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto nav-flex-icons">
                            <i class="fa fa-user"></i>
                </ul>


            </div>
        </ul>

    )
}

export default SignInLinks;