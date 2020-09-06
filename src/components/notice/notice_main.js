import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import {Switch, Route} from 'react-router-dom';
import Notice from './notice_component';
import NoticeCreate from './notice_create';
import NoticeEdit from './notice_edit';
import {connect} from 'react-redux';

class NoticeMainComponent extends Component {
    render() {
        return(
            <>
                <Switch>
                    <Route exact path="/notice" render={(props)=><Notice {...this.props} {...props}/>}/>
                    <Route path="/notice/create" render={(props)=><NoticeCreate {...this.props} {...props}/>}/>
                    <Route path="/notice/:id/" render={(props)=><NoticeEdit {...this.props} {...props}/>} /> 
                </Switch>
            </>
        )
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

const NoticeMain = connect(mapStateToProps, mapDispatchToProps)(NoticeMainComponent);

export default NoticeMain;
