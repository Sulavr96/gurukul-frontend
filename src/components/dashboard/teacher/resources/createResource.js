import { Form, Input, Label} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Select from "react-select";

class CreateResource extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            resource: {}
        };
        this.handleCourseChange = this.handleCourseChange.bind(this);
    }

    componentDidMount(){
        this.props.fetchCourse();
    }

    render(){
        let option = {}
        if(this.props.teacher && this.props.teacher.course){
            let courses = Object.values(this.props.teacher.course)
            option = courses.map(cObj=> ({ value: cObj.id, label: cObj.title }))
        }
        const course = this.state.resource && this.state.resource.course ? {value: this.state.resource.course.id, label: this.state.resource.course.title} : ''
        console.log(course ,'course')
        return(
            <div className="container mt-2 ml-6 card"> 
                <Form>
                    <Label>
                        Title:
                    </Label>
                    <Input type="text" name="title" value={this.state.resource.title} onChange={(event) => this.handleChange(event)}></Input>
                    

                    <Label>
                        Course:
                    </Label>
                    <Select value={course|| []} options={option} onChange={this.handleCourseChange}/>
                    

                    <Label>
                        Due Date:
                            <Input type="date" name="due_date" value={this.state.resource.due_date} onChange={(event) => this.handleChange(event)}></Input>
                    </Label><br />

                    <Label>
                        Description:
                    </Label>
                            <Input type="textarea" name="description" value={this.state.resource.description} onChange={(event) => this.handleChange(event)}></Input>
                    
                    <hr></hr>

                    <Label>
                        Resources:
                            <Input type="file" name="resouce_url" value={this.state.resource.file} onChange={(event) => this.handleChange(event)}></Input>
                    </Label>
                        <Button color="primary" onClick={(event)=>this.handleClick(event)}>Assign</Button><br />
                </Form>
            </div>
        )
    }

    handleChange(event){
        this.setState({
            resource: {
                ...this.state.resource,
                [event.target.name] : event.target.value
            }
        })
    }

    handleCourseChange(course){
        this.setState({
            resource:{
                ...this.state.resource,
                course_id: course.value
            }
        });
    }

    handleClick(event){
        event.preventDefault();
        this.props.postTeacherResource(this.state.resource)
    }
}



export default CreateResource;