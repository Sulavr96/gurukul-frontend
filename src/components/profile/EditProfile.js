import React from 'react';
// import { Header } from 'semantic-ui-react';

import { Image,Divider,Button,Form } from 'semantic-ui-react';
import '../css/main.css';
// import {connect} from 'react-redux';
// import DefaultUserPic from "../uploads/team-male.jpg";
// const axios = require('axios');


class EditProfile extends React.Component{
    render(){
        return(
            <div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    margin:"18px 0px"
                    }}>
                    <div>
                        <Image style={{width:"250px",height:"250px",borderRadius:"60px"}} src="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" circular alt="profilepic"/>
                    <Form>
                        <Form.Field>
                            <label style={{fontFamily:"cursive",fontSize:"25px"}}>Upload your profile picture</label>
                            <Divider horizontal></Divider>
                            <input type="file"/>
                        </Form.Field>
                    </Form>
                    </div>
                    <div style={{
                        display:"inline",padding:"30px"
                    }}>
                    <div style={{margin:"20px"}}>
                    <Form>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px" ,color:"white"}}>First Name</label>
                        <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px",color:"white"}}>Last Name</label>
                        <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px",color:"white"}}>User Name</label>
                        <input placeholder='User Name' />
                        </Form.Field>
                        <Form.Field>
                        <label style={{fontFamily:"cursive",fontSize:"25px",color:"white"}}>Email</label>
                        <input placeholder='Email' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                    </div>

                    
                    </div>
                </div>
            </div>
        )}
}
   export default EditProfile;