import React, { Component } from 'react';
import * as NoticeActionCreator from '../../actions/notice';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

class NoticeView extends Component {
    constructor(props) {
        super(props);
        this.state = [
                {
                    id: '',
                    title : '',
                    content : ''
                }
        ]           
    }

    componentDidMount() {
        this.props.noticeFetch()
    }

    noticeFetch() {

        
    }

    render() {
        return (
            <div>
                <h1> Notice!!! </h1>
                <h2> </h2>
            </div>
        );
        console.log(this.props,'***********');
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
