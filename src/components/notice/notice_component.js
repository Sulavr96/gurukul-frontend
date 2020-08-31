import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

class NoticeView extends Component {

    componentDidMount() {
        this.props.noticeFetch()
    }

    render() {
        let notice_view;
        if(this.props.notice && this.props.notice.notice) {
            notice_view = this.props.notice.notice.map(noticeObj=> {         
                return <ul key={noticeObj.id}>
                    <li>{noticeObj.title}</li>
                    <p>{noticeObj.content}</p>
                </ul>
                }
            )
        }
        return (
            <div>
                <h1> Notice</h1>
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
