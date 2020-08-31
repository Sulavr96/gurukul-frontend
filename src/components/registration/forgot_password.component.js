import React, { Component } from "react";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
//import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SignOutLinks from "../navbar/SignOutLinks.component";


class ForgotPassword extends Component {
    render() {
        return (
            <div className="container mt-4 ml-10">
                <div className="col-md-7">
                    <div className="card">
                    <h5 className="card-header font-weight-bold">Forgot Password</h5>
                        <Form className="col-sm-2 col-md-5 col-lg-3">
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input id="email" name="email" />
                                <FormFeedback></FormFeedback>
                            </FormGroup>
                            <Button color="primary">Submit</Button><br />
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default ForgotPassword;
