import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

class NoticeView extends Component {
    constructor(props) {
        super(props);
        this.state = []           
    }

    componentDidMount() {
        this.props.noticeFetch()
    }



    render() {
        return (
            <div>
                <h1> Notice!!! </h1>
                <h2>{this.state} </h2>
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
