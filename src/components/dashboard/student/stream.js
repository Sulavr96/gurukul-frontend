import React from 'react';
import Card from 'react-bootstrap/Card'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import SignInLinks from '../../navbar/SignInLinks.component';




function Stream() {
    return (
        <div>

            <SignInLinks></SignInLinks>

            <div className="container mt-2 ml-6">
                <div className="row">

                    <div className="col">
                        <Card className="card mt-1 ml-5" style={{ width: '17rem' }}>
                            <Card.Header>UPCOMMING ASSIGNMENTS</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ color: "Red" }}>DUE TODAY</Card.Title>
                                <p>Python Assignment-I</p>
                                <hr></hr>
                                <Card.Title style={{ color: "Red" }}>DUE TOMORROW</Card.Title>
                                <p>Python Assignment-II</p>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col">
                        <Card className="card mt-1 ml-5" style={{ width: '43rem' }}>

                            <Card.Header>Gurukul</Card.Header>
                            <Card.Body>
                                resources here
                        </Card.Body>
                            <hr></hr>
                            <Form>
                            <Input type="text" name="queries" placeholder="Add your comment" style={{ marginBottom: '10px', marginLeft: '20px', width: '40rem', borderRadius: 25, borderWidth: 2 }}></Input>
                            <Button color="primary" style={{ marginLeft: '20px',marginBottom: '20px' }}>Post</Button>
                            </Form>

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Stream;
