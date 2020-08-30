import React from 'react';
import StyledInput from '../common/input';
import StyledTextField from '../common/textfield';
import StyledButton from '../common/button';
import { Link } from 'react-router-dom';

class ViewProfile extends React.Component{   

    constructor(props) {
        super(props);
        this.state = {
            user:[]
        }
        this.inputBioValue = this.inputBioValue(this);
        this.inputFirstNameValue = this.inputFirstNameValue.bind(this);
        this.inputMidNameValue = this.inputMidNameValue.bind(this);
        this.inputLastNameValue = this.inputLastNameValue.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        console.log(localStorage.getItem('userId'))
        let id = localStorage.getItem('userId')
        this.props.getuserInfo(id);
    }

    render(){
        if(this.props.userProfile && this.props.userProfile.user && this.props.editMode){
            this.state.user = this.props.userProfile.user[0]
        }
        let userInfo;
        if (this.props.userProfile && this.props.userProfile.user){
            userInfo = this.props.userProfile.user.map(user => {
                return  <div className="container mt-5 ml-0" key={user.id} >
                <div className="row">
                <div className="col"> 
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={user.profile_image_url? user.profile_image_url : "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"} alt="Profile Image"/>
                        <div className="card-body">
                            {this.props.editMode ?
                                <StyledTextField placeholder={'Bio here...'} value={this.state.user.bio || ''} onChange={value=>this.inputBioValue(value)}/>
                            :
                                <p className="card-text">{user.bio? user.bio : ''}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <h5 className="card-header font-weight-bold">{this.props.editMode ? 'Edit User Information' : 'User Information'}</h5>
                        <div className="card-body">
                        {this.props.editMode ?
                            <div>
                                <StyledInput placeholder={'First Name'} value={this.state.user.first_name || ''} onChange={(value)=>this.inputFirstNameValue(value)}/>
                                <StyledInput placeholder={'Middle Name'} value={this.state.user.middle_name || ''} onChange={(value)=>this.inputMidNameValue(value)}/>
                                <StyledInput placeholder={'Last Name'} value={this.state.user.last_name || ''} onChange={(value)=>this.inputLastNameValue(value)}/>
                            </div>
                        :
                            <p> Name: {user.first_name} {user.middle_name} {user.last_name}</p>
                        } 

                        {this.props.editMode ?
                            <StyledButton handleClick = {(event)=>this.handleUpdate(event, user.id)} value={'Save'}/>
                        :''}   
                                             
                        </div>
                    </div>
                </div>
                </div>
                <div>
                {this.props.editMode ?
                    ''
                :
                    <Link to={`/user/${user.id}`}>Update </Link>
                }
                </div>
            </div>   
            })
        } 

        return(   
            <div>
                {userInfo}
            </div>    
        )
    }

    inputFirstNameValue(value){
        this.setState({
            user : {
                ...this.state.user,
                first_name : value
            }
        })
    }

    inputMidNameValue(value){
        this.setState({
            user:{
                ...this.state.user,
                middle_name : value
            }

        })
    }

    inputLastNameValue(value){
        this.setState({
            user:{
                ...this.state.user,
                last_name : value
        }
        })
    }

    inputBioValue(value){
        this.setState({
            user:{
                ...this.state.user,
                bio : value
        }
        })  
    }

    handleUpdate(event, id){
        event.preventDefault();
        this.props.updateUserInfo(id, this.state.user)
    }

}

export default ViewProfile;