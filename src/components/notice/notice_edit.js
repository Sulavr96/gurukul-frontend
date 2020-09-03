import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


class NoticeEditComponent extends Component {
    constructor(props){
        super();
        this.state = {
            title: '',
            content: ''
        }
        this.setNotice = this.setNotice.bind(this)
    } 

    componentDidMount(){
        this.props.noticeObjectFetch(this.props.match.params.id)
       
    }

    setNotice() {
        if(this.props.notice && this.props.notice.notice){
            const { notice } = this.props.notice
            this.setState({
                title: notice.title,
                content: notice.content
            })
        }
    }

    notifySuccess = () => {
        toast("Saved Successfully")
    }

    notifyError = () => {
        toast("There was an error")
    }

    render() {
        let notice_obj;
        if(this.props.notice && this.props.notice.notice) {
            const {title, content} = this.state;
            notice_obj = <Form className="col-sm-2 col-md-5 col-lg-3">
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input id="title" value={title}  name="title" onChange={(event) => this.handleChange(event)}/>
                            </FormGroup>
    
                            <FormGroup>
                                <Label for="content">Content</Label>
                                <Input id="content" type="textarea" value={content} name="content" onChange={(event) => this.handleChange(event)} />
                            </FormGroup>
                            <Button color="primary" onClick={(event)=>this.handleClick(event)}>Save</Button><br/>
                            <ToastContainer />
                        </Form>
        }
        return (
            <div>
                <Button color="success" tag={Link} to="/notice"> 
                    <FontAwesomeIcon icon={faArrowLeft}/>  Notices  
                    </Button>
                    <h2>Notice</h2> 
                    {notice_obj}
            </div> 
        );

    }

    handleClick(event){
        event.preventDefault();
        this.props.noticeEdit(this.props.match.params.id, this.state)
        this.notifySuccess()
        this.props.history.push('/notice/'+this.props.match.params.id)

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

const NoticeEdit = connect(mapStateToProps, mapDispatchToProps)(NoticeEditComponent);

export default NoticeEdit;
