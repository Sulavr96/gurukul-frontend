import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import '../../css/notice.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NoticeEdit from "./notice_edit";

class NoticeView extends Component {
    
    componentDidMount() {
        this.props.noticeFetch()
    }
    

    render() {
        let notice_view;
        if(this.props.notice && this.props.notice.notice) {
            notice_view = this.props.notice.notice.map(noticeObj=> {         
                return <div className="row">
                        <div className="col main-container">
                            <div className="card notice-container">
                                <div className="row">
                                    <h2 className="notice-heading col-sm-9">{noticeObj.title}</h2>
                                    <Link to={`/notice/${noticeObj.id}/`}>
                                        <Button color="primary" className="edit-button"> 
                                            Edit <FontAwesomeIcon icon={faEdit}/>
                                        </Button> 
                                    </Link>
                                   <Button color="danger" className="edit-button del-button"> Delete <FontAwesomeIcon icon={faTrash} /> </Button>
                                </div>
                                <span>Posted at: {(new Date(parseInt(noticeObj.created_at))).toLocaleDateString()}</span>
                            <p className="content">{noticeObj.content}</p>
                            </div>
                        </div>
                    </div>
                }
            )
        }
        return (
            <div className="container">
                <div className="row heading">
                    <h1> Notice</h1>
                </div>
                <div className="row create-button"> 
                    <Button color="success" tag={Link} to="/notice/create"> 
                        Create notice <FontAwesomeIcon icon={faPen}/> 
                    </Button>
                </div>
                    {notice_view}            
            </div>
            );
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

const Notice = connect(mapStateToProps, mapDispatchToProps)(NoticeView);
    

export default Notice;
