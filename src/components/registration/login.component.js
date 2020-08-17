import React, { Component } from "react";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import SignOutLinks from "../navbar/SignOutLinks.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Login extends Component {
    render() {
        return (

            <Form className="col-sm-2 col-md-5 col-lg-3">
                <h2>Login</h2>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" name="password" />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <Button color="primary">Login</Button><br/>
                <Link to ="/signup">Create a new account</Link><br/>
                <Link to="/">Forgot Password</Link>

            </Form>

        );
    }
}

export default Login;
