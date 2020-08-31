import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

class NoticeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        notice: []
    }
}

    componentDidMount() {
        this.props.noticeFetch()
    }

    render() {
         if(this.props.notice && this.props.notice.notice){
            this.state.notice = this.props.notice.notice[0]
        }
        let notice_view;
        console.log(this.props.notice.notice)
        if(this.props.notice && this.props.notice.notice) {
        return (
            <div>
                <h1> Notice!!! </h1>
                <ul>
               {notice_view=this.props.notice.notice.map(n =>
                     <li key={n.title}>{n.title}</li>)}
                </ul>
            </div>
        );
        }
        return (
            <div>
            {notice_view}
            </div>);
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
