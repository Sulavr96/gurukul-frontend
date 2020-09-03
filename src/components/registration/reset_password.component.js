import React, { Component } from "react";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { Link } from "react-router-dom/cjs/react-router-dom.min";



class ResetPassword extends Component {
    render() {
        return (

            <div className="container mt-4 ml-10">
                <div className="col-md-6">
                    <div className="card">
                        <Form className="col-sm-5 col-md-5 col-lg-9">
                            <h2>Set a new password!</h2>
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

                            <FormGroup>
                                <Label for="Confirmpassword">Confirm Password</Label>
                                <Input id="confirmpassword" type="password" name="confirmpassword" />
                                <FormFeedback></FormFeedback>
                            </FormGroup>

                            <Button color="primary">Reset Password</Button><br />
                            <Link to="/">Login</Link>

                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default ResetPassword;
