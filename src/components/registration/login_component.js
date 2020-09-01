import React, { Component } from "react";
import { Form, Label, FormGroup, Button } from 'reactstrap';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EmailInput from '../common/email';
import PasswordInput from '../common/password';
import * as LoginActionCreator from "../../actions/auth";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


class LoginMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    render() {
        return (
            <div className="container mt-4 ml-10">
                <div className="col-md-6">
                    <div className="card">
                        <h5 className="card-header font-weight-bold">Login</h5>
                        <Form className="col-sm-2 col-md-6 col-lg-6">

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <EmailInput placeholder={'Email'} value={this.state.email} onChange={value => this.inputEmailValue(value)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password</Label>
                                <PasswordInput placeholder={'Password'} value={this.state.password} onChange={value => this.inputPasswordValue(value)} />
                            </FormGroup>

                            <Button color="primary" onClick={(event) => this.handleClick(event)}>Login</Button><br />
                            <Link to="/signup">Create a new account</Link><br />
                            <Link to="/forgotpassword">Forgot Password</Link>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }


    handleClick(event) {
        event.preventDefault();
        let userInfo = {}
        userInfo.email = this.state.email;
        userInfo.password = this.state.password;
        this.props.userLogin(userInfo);
        this.props.history.push('/');
    }

    inputPasswordValue(value) {
        this.setState({
            password: value
        })
    }

    inputEmailValue(value) {
        this.setState({
            email: value
        })
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(LoginActionCreator, dispatch);
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginMain);

export default Login;
