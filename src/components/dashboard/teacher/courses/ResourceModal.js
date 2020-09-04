import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Input, Label, Button } from 'reactstrap';

const ResourceModal = (props) => {
    return (
        <>
            <Modal show={props.modal1Open} onHide={props.handleModal1Open}>
                <Modal.Header closeButton>
                    <Modal.Title>Resource</Modal.Title>
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
                            Resource_Url:
                                <Input type="url" name="resource_url" ></Input>
                        </Label><br />

                        


                        <Label>
                            Description:
                                <Input type="textarea" name="description" ></Input>
                        </Label><br />
                        <hr></hr>


                        <Label>
                            Content:
                                <Input type="file" name="file" ></Input>
                        </Label>
                        <Button color="primary">Assign</Button><br />
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ResourceModal;