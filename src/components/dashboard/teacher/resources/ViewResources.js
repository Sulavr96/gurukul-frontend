import { Form, Input, Label} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card'

class ViewTeacherResourceList extends React.Component{
    render(){
        return(
            <div className="container mt-2 ml-6"> 
                <Card.Link href="/teacher/resources/create/" onClick={this.handleModal1Open}>Create</Card.Link>
            </div>
        )
    }
}


export default ViewTeacherResourceList;