import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Input, Label} from 'reactstrap';
import Button from 'react-bootstrap/Button';



const AssignmentModal = (props) => {
    return (
        <>
            <Modal show={props.modal2Open} onHide={props.handleModal2Open}>
                <Modal.Header closeButton>
                    <Modal.Title>Assignment</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>
                        <Label>
                            Title:
                                <Input type="text" name="title" ></Input>
                        </Label><br />


                        <Label>
                            Course:
                                <Input type="text" name="course" ></Input>
                        </Label><br />



                        <Label>
                            Resource_url:
                                <Input type="url" name="resource_url" ></Input>
                        </Label><br />

                        <Label>
                            Due Date:
                                <Input type="date" name="due_date" ></Input>
                        </Label><br />



                        <Label>
                            Description:
                                <Input type="textarea" name="description" ></Input>
                        </Label><br />
                        <hr></hr>


                        <Label>
                            Resources:
                                <Input type="file" name="file" ></Input>
                        </Label>
                        <Button color="primary">Assign</Button><br />
                    </Form>
            ....
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleModalOpen}>
                        Cancel
                 </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AssignmentModal;