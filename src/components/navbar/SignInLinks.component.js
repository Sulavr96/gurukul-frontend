import React from 'react'

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

                    
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color:"black" }}>
                                        PROFILE
                                    </a>
                                    
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