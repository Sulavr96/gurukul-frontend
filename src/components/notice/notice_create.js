import React, { Component, Fragment } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
  

class NoticeCreateComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                title : '',
                content : ''
            },
            errors: {
                titleError: '',
                contentError:''
            }
        }
    }

    validate = () => {
        const { data, errors } = this.state;
        let titleError = "";
        let contentError = "";

        if(data.title === "") {
            titleError = "Title cannot be blank"
        }

        if(data.content === "") {
            contentError = "Content cannot be blank"
        }
        
        if(titleError || contentError) {
            this.setState({errors: { titleError: titleError, contentError: contentError}});
            return false;
        }
        this.setState({errors: {titleError: '', contentError: ''}})
        return true;
    }

    notifySuccess = () => {
        toast("Created Successfully")
    }

    notifyError = () => {
        toast("There was an error")
    }

    render() {
        const {data, errors} = this.state;
        return (
            <Form className="col-sm-2 col-md-5 col-lg-3">
                <Button color="success" tag={Link} to="/notice"> 
                    <FontAwesomeIcon icon={faArrowLeft}/>  Notices  
                </Button>
            <h2>Notice</h2>

            <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="title" value={data.title} invalid={errors.title ? true : false} name="title" onChange={(event) => this.handleChange(event)}/>
                    <div style={{ fontSize: 12, color: "red" }}> {errors.titleError} </div>
            </FormGroup>

            <FormGroup>
                <Label for="content">Content</Label>
                <Input id="content" type="textarea" value={data.content} invalid={errors.content ? true : false} name="content" onChange={(event) => this.handleChange(event)} />
                <div style={{ fontSize: 12, color: "red" }}> {errors.contentError} </div>
            </FormGroup>
            <Button color="primary" onClick={(event)=>this.handleClick(event)}>Submit</Button><br/>
            <ToastContainer />
        </Form>
        );
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name] : event.target.value
            }
        })
    }


    handleClick(event){
        event.preventDefault();
        const is_valid = this.validate()
        if(is_valid) {
            this.props.noticeCreate(this.state.data);
            this.notifySuccess()
            this.props.history.push('/notice/create');     
    }
    else{
        this.notifyError()
    }
}
}


function mapStateToProps(state){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators(NoticeActionCreator, dispatch);
}

const NoticeCreate = connect(mapStateToProps, mapDispatchToProps)(NoticeCreateComponent);

export default NoticeCreate;