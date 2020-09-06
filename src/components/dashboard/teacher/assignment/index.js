import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Teacher_SideBar from '../t_sidebar';
import * as TeacherAssignmentActionCreator from '../../../../actions/assignment';
import ViewAssignmentList from "./viewAssignment";
import CreateAssignment from './createAsignment';

class TeacherAssignmentMain extends Component {
    render(){
        return(
            <><div>
                <Teacher_SideBar/>
                 <Switch>
                    <Route exact path="/teacher/assignment/" render={(props)=><ViewAssignmentList {...this.props} {...props}/>}/>
                    <Route path="/teacher/assignment/:id/" render={(props)=><CreateAssignment {...this.props} {...props}/>}/>
                    <Route path="/teacher/assignment/:id/" render={(props)=><CreateAssignment {...this.props} {...props}/>}/>
                </Switch>
            </div>            
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
    return bindActionCreators(TeacherAssignmentActionCreator, dispatch);
    }

const TeacherAssignment = connect(mapStateToProps, mapDispatchToProps)(TeacherAssignmentMain);
    

export default TeacherAssignment;
