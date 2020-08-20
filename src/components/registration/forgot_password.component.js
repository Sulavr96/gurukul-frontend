import React, { Component } from "react";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import SignOutLinks from "../navbar/SignOutLinks.component";


class ForgotPassword extends Component {
    render() {
        return (

            <Form className="col-sm-2 col-md-5 col-lg-3">
                <h2>Forgot Password</h2>
                

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" />
                    <FormFeedback></FormFeedback>
                </FormGroup>
            
                <Button color="primary">Submit</Button><br/>
                

            </Form>

        );
    }
}

export default ForgotPassword;
