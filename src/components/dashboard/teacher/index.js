import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Courses from './courses/course';
import Teacher_profile from './t_profile';
import Teacher_SideBar from './t_sidebar';
import * as TeacherActionCreator from '../../../actions/teacher';

class TeacherDashboardMain extends Component {
    render(){
        return(
            <><div>
                <Teacher_SideBar/>
                 <Switch>
                    <Route path="/teacher/profile/" render={(props)=><Teacher_profile {...this.props} {...props}/>}/>
                    <Route path="/teacher/courses/" render={(props)=><Courses {...this.props} {...props}/>}/>
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
    return bindActionCreators(TeacherActionCreator, dispatch);
    }

const TeacherDashboard = connect(mapStateToProps, mapDispatchToProps)(TeacherDashboardMain);
    

export default TeacherDashboard;
