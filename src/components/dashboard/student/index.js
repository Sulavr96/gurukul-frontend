import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import Student_profile from './s_profile';
import Student_SideBar from './s_sidebar';
import Stream from './stream';
import * as StudentActionCreator from '../../../actions/student';

class StudentDashboardMain extends Component {
    render(){
        return(
            <><div>
                <Student_SideBar/>
                 <Switch>
                    <Route path="/student/profile/" component={Student_profile} />
                    <Route path="/student/stream/" component={Stream} />
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
    return bindActionCreators(StudentActionCreator, dispatch);
    }

const StudentDashboard = connect(mapStateToProps, mapDispatchToProps)(StudentDashboardMain);
    

export default StudentDashboard;
