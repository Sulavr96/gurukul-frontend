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
                                <img className="rounded-circle article-img" src="{{ }}"></img>
                            </ul>
                        </ul>

                      


                    </div>
                </ul>
            </div>
        </nav>


    )
}

export default SignInLinks;