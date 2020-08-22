import React, { Component } from "react";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import SignOutLinks from "../navbar/SignOutLinks.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EmailInput from '../common/email';
import PasswordInput from '../common/password';
import * as LoginActionCreator from "../../actions/auth";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';


class LoginMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }


    render() {
        console.log(this.state.userInfo)
        return (
        
            <Form className="col-sm-2 col-md-5 col-lg-3">
                <h2>Login</h2>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <EmailInput placeholder={'Email'} value={this.state.email} onChange={value=>this.inputEmailValue(value)}/>
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <PasswordInput placeholder={'Password'} value={this.state.password} onChange={value=>this.inputPasswordValue(value)}/>
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <Button color="primary" onClick={(event)=>this.handleClick(event)}>Login</Button><br/>
                <Link to ="/signup">Create a new account</Link><br/>
                <Link to="/forgotpassword">Forgot Password</Link>

            </Form>

        );
    }


    handleClick(event){
        event.preventDefault();
        let userInfo ={}
        userInfo.email = this.state.email;
        userInfo.password = this.state.password;
        this.props.userLogin(userInfo);
        this.props.history.push('/');
    }

    inputPasswordValue(value){
        this.setState({
            password: value
        })
    }

    inputEmailValue(value){
        this.setState({
            email: value
        })
    }
}

function mapStateToProps(state){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators(LoginActionCreator, dispatch);
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginMain);

export default Login;
