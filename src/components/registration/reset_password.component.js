import React, { Component } from "react";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';



class ResetPassword extends Component {
    render() {
        return (

            <Form className="col-sm-2 col-md-5 col-lg-3">
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
            
                <Button color="primary">Reset Password</Button><br/>
                <Link to="/login">Login</Link>

            </Form>

        );
    }
}

export default ResetPassword;
