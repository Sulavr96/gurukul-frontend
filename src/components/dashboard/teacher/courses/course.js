import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import T_Sidebar from '../t_sidebar'
import AssignmentModal from './AssignmentModal'
import ResourceModal from './ResourceModal'


class Courses extends Component {

    state = {
        modal1Open: true
     }
   
     handleModal1Open = () => {
        this.setState((prevState) => {
           return{
              modal1Open: !prevState.moda1lOpen
           }
        })
     }


     state = {
        modal2Open: false
     }
   
     handleModal2Open = () => {
        this.setState((prevState) => {
           return{
              modal2Open: !prevState.modal2Open
           }
        })
     }

    componentDidMount(){
        this.props.fetchCourse();
    }

    render() {
        let courseBody;
        console.log(this.props.teacher.course,'&&&&&&&&&&&&&&&7')
        if(this.props.teacher && this.props.teacher.course){
            courseBody = this.props.teacher.course.map(course => {
                return <div>
                     <div className="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Link href="" onClick={this.handleModal1Open}>Resources</Card.Link>
                                    <Card.Link href="" onClick={this.handleModal2Open}>Assignments</Card.Link>
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

                <ResourceModal
                    modal1Open={this.state.modal1Open}
                    handleModal1Open={this.handleModal1Open}
                    />

                <AssignmentModal
                    modal2Open={this.state.modal2Open}
                    handleModal2Open={this.handleModal2Open}
                    />
                

            </div>
        );
    }
}

export default Courses; 
