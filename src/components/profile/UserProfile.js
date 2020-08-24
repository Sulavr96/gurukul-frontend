import React from 'react';

class UserProfile extends React.Component{
    render(){
        return(   
            <div className="container mt-5 ml-0">
                <div className="row">
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" alt="Profile Image"/>
                        <div className="card-body">
                            <p className="card-text">bio here!!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <h5 className="card-header font-weight-bold">User Information</h5>
                        <div className="card-body">
                            Information heree!!                         
                        </div>
                    </div>
                </div>
                </div>
            </div>          
        )
    }
}

export default UserProfile;