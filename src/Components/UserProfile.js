import React from 'react';
// import { Header } from 'semantic-ui-react';

import { Button,Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import DefaultUserPic from "../uploads/team-male.jpg";
// const axios = require('axios');


class UserProfile extends React.Component{
    render(){
        return(
            <div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    margin:"18px 0px"
                    }}>
                    <div>
                        <img style={{width:"250px",height:"250px",borderRadius:"60px"}} src="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" alt="profilepic"/>
                    </div>
                    <div style={{
                        display:"inline",padding:"30px",color:"white"
                    }}>

                    <Form>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px"}}>First Name</label>
                        {/* <input placeholder='First Name' /> */}
                        </Form.Field>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px"}}>Last Name</label>
                        {/* <input placeholder='Last Name' /> */}
                        </Form.Field>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px"}}>User Name</label>
                        {/* <input placeholder='Last Name' /> */}
                        </Form.Field>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px"}}>Email</label>
                        {/* <input placeholder='Last Name' /> */}
                        </Form.Field>
                        {/* <Button type='submit'>Edit Profile</Button> */}
                    </Form>
                    <Link to="/edit"><button>Edit Profile</button></Link>

                    
                    </div>
                </div>
            </div>
        )}
}
   export default UserProfile;