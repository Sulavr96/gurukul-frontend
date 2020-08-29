import React from 'react';
import * as UserProfileActionCreator from "../../actions/userprofile";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import StyledButton from '../common/button';

class UserProfileMain extends React.Component{


    componentDidMount(){
        console.log(localStorage.getItem('userId'))
        let id = localStorage.getItem('userId')
        this.props.getuserInfo(id);
    }

    render(){
        let userInfo;
        if (this.props.userProfile && this.props.userProfile.user){
            userInfo = this.props.userProfile.user.map(user => {
                return   <div className="container mt-5 ml-0">
                <div className="row">
                <div className="col"> 
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={user.profile_image_url? user.profile_image_url : "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"} alt="Profile Image"/>
                        <div className="card-body">
                            <p className="card-text">{user.bio? user.bio : ''}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <h5 className="card-header font-weight-bold">User Information</h5>
                        <div className="card-body">
                            <p> Name: {user.first_name} {user.middle_name} {user.last_name}</p>                 
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <StyledButton value={'Edit User'}></StyledButton>
                </div>
            </div>   
            })
        } 
        return(   
        <div>{userInfo}</div>    
        )
    }
}

function mapStateToProps(state){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators(UserProfileActionCreator, dispatch);
}

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfileMain);


export default UserProfile;