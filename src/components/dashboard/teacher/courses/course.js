import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import T_Sidebar from '../t_sidebar'
import AssignmentModal from './AssignmentModal'
import ResourceModal from './ResourceModal'


class Courses extends Component {

    componentDidMount(){
        this.props.fetchCourse();
    }

    render() {
        let courseBody;
        if(this.props.teacher && this.props.teacher.course){
            courseBody = this.props.teacher.course.map(course => {
                return <div>
                     <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Link href="/teacher/resources/" onClick={this.handleModal1Open}>Resources</Card.Link>
                                    <Card.Link href="/teacher/assignment/" onClick={this.handleModal2Open}>Assignments</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                </div>
            })
        }
        return (
            <div>
                <div className="container mt-2 ml-6">
                    <div className="row">                       
                        {courseBody}
                    </div>
                </div>
            </div>
        );
    }
}

export default Courses; 
