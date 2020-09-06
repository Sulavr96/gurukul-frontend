import React, { Component } from 'react';
import '../../assets/css/notice.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NoticDeleteModal from './notice_delete_modal';

class NoticeView extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }     
    }

    componentDidMount() {
        this.props.noticeFetch()  
    }

   
    toggleDeleteModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
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
                                    <Button color="danger" className="edit-button del-button" onClick={() => this.deleteModal(noticeObj.id)} > 
                                        Delete <FontAwesomeIcon icon={faTrash} />
                                    </Button>
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
    

export default NoticeView;
