import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import SignOutLinks from "../navbar/SignOutLinks.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as RegistrationActionCreator from "../../actions/auth";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


class RegistrationMain extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            middle_name: ''
        },
        errors: {}
    });



    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.first_name === '') errors.first_name = 'First Name can not be blank.';
        if (data.last_name === '') errors.last_name = 'Last Name can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirm_password !== data.password) errors.confirm_password = 'Passwords must match.';

        return errors;
    }



    render() {
        const { data, errors } = this.state;
        console.log(this.state.data)
        return (
            <div className="container mt-4 ml-10">
                <div className="col-md-6">
                    <div className="card">
                        <h5 className="card-header font-weight-bold">Signup</h5>

                        <Form className="col-sm-2 col-md-6 col-lg-6" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input id="firstName" value={data.first_name} invalid={errors.first_name ? true : false} name="first_name" onChange={(event) => this.handleChange(event)} />
                                <FormFeedback>{errors.first_name}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="MiddleName">Middle Name</Label>
                                <Input id="MiddleName" value={data.middle_name || ''} name="middle_name" onChange={(event) => this.handleChange(event)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input id="lastName" value={data.last_name} invalid={errors.last_name ? true : false} name="last_name" onChange={(event) => this.handleChange(event)} />
                                <FormFeedback>{errors.last_name}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={(event) => this.handleChange(event)} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={(event) => this.handleChange(event)} />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input id="confirmPassword" value={data.confirm_password} type="password" name="confirm_password" invalid={errors.confirm_password ? true : false} onChange={(event) => this.handleChange(event)} />
                                <FormFeedback>{errors.confirm_password}</FormFeedback>
                            </FormGroup>

                            <Button color="primary" onClick={(event) => this.handleClick(event)}>Register</Button><br></br>
                            <Link to="/login">Already have an account</Link><br />
                        </Form>
                    </div>
                </div>
            </div>

        );
    }

    handleChange(event) {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            },
            errors: {
                ...this.state.errors,
                [event.target.name]: ''
            }
        })
    }

    handleClick(event) {
        event.preventDefault();
        this.props.userRegister(this.state.data);
        this.props.history.push('/login');
    }

}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(RegistrationActionCreator, dispatch);
}

const Registration = connect(mapStateToProps, mapDispatchToProps)(RegistrationMain);

export default Registration;