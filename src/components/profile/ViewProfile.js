import React from 'react';
import StyledInput from '../common/input';
import StyledTextField from '../common/textfield';
import StyledButton from '../common/button';
import StyledEmail from '../common/email';
import { Link } from 'react-router-dom';

class ViewProfile extends React.Component{   

    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
        this.inputBioValue = this.inputBioValue.bind(this);
        this.inputFirstNameValue = this.inputFirstNameValue.bind(this);
        this.inputMidNameValue = this.inputMidNameValue.bind(this);
        this.inputLastNameValue = this.inputLastNameValue.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        let id = localStorage.getItem('userId')
        this.props.getuserInfo(id);
        
    }

    render(){
        let userInfo;
        if (this.props.userProfile && this.props.userProfile.user){
            userInfo = this.props.userProfile.user.map(user => {
                return  <div className="container mt-5 ml-0" key={user.id} >
                <div className="row">
                <div className="col"> 
                    <div className="card" style={{width: "18rem"}}>
                        {this.props.editMode ? <img className="card-img-top" src={this.state.user.profile_image_url || "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" } alt="Profile Image"/>
                        :   
                            <img className="card-img-top" src={user.profile_image_url? user.profile_image_url : "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"} alt="Profile Image"/>
                        }
                        <div className="card-body">
                            {this.props.editMode ?
                                <StyledTextField placeholder={'Bio here...'} value={this.state.user.bio || ''} onChange={value=>this.inputBioValue(value)}/>
                            :
                                <p className="card-text">{user.bio}</p>
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
                                <input type="text" value={this.state.user.email} readOnly></input>
                            </div>
                        :
                            <div>
                                <p> Name: {user.first_name} {user.middle_name} {user.last_name}</p>
                                <p>Email: {user.email}</p>
                            </div>
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
                    <Link to={`/user/${user.id}/`}>Update </Link>
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
                first_name:value
            }
        })
    }

    inputMidNameValue(value){
        this.setState({
            user:{
                ...this.state.user,
                middle_name:value
            }

        })
    }

    inputLastNameValue(value){
        this.setState({
            user:{
                ...this.state.user,
                last_name:value
        }
        })
    }

    inputBioValue(value){
        console.log(value)
        this.setState({
            user:{
                ...this.state.user,
                bio:value
        }
        })  
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.userProfile.user != this.props.userProfile.user){
            this.setState({
                user : this.props.userProfile.user[0]
            })
            
        }
    }

    handleUpdate(event, id){
        console.log(this.state.user)
        event.preventDefault();
        this.props.updateUserInfo(id, this.state.user)
        this.props.history.push('/user/')
    }

}

export default ViewProfile;