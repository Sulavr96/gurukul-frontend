import React from 'react';
import Card from 'react-bootstrap/Card'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import SignInLinks from '../../navbar/SignInLinks.component';




function Assignments() {
    return (
        <div>

            <SignInLinks></SignInLinks>

            <div className="container mt-2 ml-6">
                
                        <Card className="card mt-1 ml-5" style={{ width: '43rem' }}>

                            <Card.Header>Your work</Card.Header>
                            <Card.Body>
                               <Form>
                                   <input type="text" name="link">Place the assignment link here</input>
                                   <hr></hr>
                                   <input type="text" name="remarks"></input>
                                   <Button color="primary">Mark As Done</Button><br />
                               </Form>
                        </Card.Body>
                        </Card>
                    </div>
                    </div>
    );
}

export default Assignments;