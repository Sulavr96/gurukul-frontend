import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import T_Dashboard from '../teacher/teacher'



class T_home extends Component {

    render() {
        return (
            <div>

            <T_Dashboard></T_Dashboard>

            <div className="container mt-2 ml-6">
                <div className="row">

                    <div className="col">
                        <Card className="card mt-1 ml-5" style={{ width: '18rem' }}>
                            <Card.Header>UPCOMMING ASSIGNMENTS</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ color: "Red" }}>DUE TODAY</Card.Title>
                                <p>Python Assignment-I</p>
                                <hr></hr>
                                <Card.Title  style={{ color: "Red" }}>DUE TOMORROW</Card.Title>
                                <p>Python Assignment-II</p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col">
                        <Card style={{ width: '40rem' }}>
                            <Card.Header>RESOURCES</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <Form>
                                        <Label>
                                            Title:
                                <Input type="text" name="title" ></Input>
                                        </Label><br />

                                        <Label>
                                            Course:
                                <Input type="text" name="url" ></Input>
                                        </Label><br />


                                        <Label>
                                            Resource_url:
                                <Input type="url" name="resource_url" ></Input>
                                        </Label><br />

                                
                                        <Label>
                                            Description:
                                <Input type="textarea" name="description" ></Input>
                                        </Label><br />
                                        <hr></hr>

                                        <Label>
                                            Content:
                                <Input type="file" name="content" ></Input>
                                        </Label>


                                        <Button color="primary">Assign</Button><br />

                                    </Form>

                                </Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}

export default T_home; 
