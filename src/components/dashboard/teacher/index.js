import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Courses from './courses/course';
import Teacher_profile from './t_profile';
import Teacher_SideBar from './t_sidebar';
import * as TeacherActionCreator from '../../../actions/teacher';
import * as TeacherRseourcesActionCreator from '../../../actions/resources';
import ViewTeacherResourceList from './resources/ViewResources';
import CreateResource from './resources/createResource';

class TeacherDashboardMain extends Component {
    render(){
        return(
            <><div>
                <Teacher_SideBar/>
                 <Switch>
                    <Route exact path="/teacher/profile/" render={(props)=><Teacher_profile {...this.props} {...props}/>}/>
                    <Route exact path="/teacher/courses/" render={(props)=><Courses {...this.props} {...props}/>}/>
                    <Route exact path="/teacher/resources/" render={(props)=><ViewTeacherResourceList {...this.props} {...props}/>}/>
                    <Route path="/teacher/resources/create" render={(props)=><CreateResource {...this.props} {...props}/>}/>
                    <Route path="/teacher/resources/:id/edit" render={(props)=><CreateResource editMode={true} {...this.props} {...props}/>}/>
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
    return bindActionCreators(Object.assign({}, TeacherActionCreator, TeacherRseourcesActionCreator), dispatch);
    }

const TeacherDashboard = connect(mapStateToProps, mapDispatchToProps)(TeacherDashboardMain);
    

export default TeacherDashboard;
