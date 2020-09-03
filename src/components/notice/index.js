import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import NoticeView from './notice_component';

class NoticeMain extends Component {
    render(){
        return(
            <>
                <Switch>
                    <Route exact path="/notice" render={(props)=><NoticeView {...this.props} {...props}/>}/>
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

const Notice = connect(mapStateToProps, mapDispatchToProps)(NoticeMain);
    

export default Notice;
