import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import T_Dashboard from './t_sidebar'



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
                    </div>
                </div>
            </div>
        );
    }
}

export default T_home; 
