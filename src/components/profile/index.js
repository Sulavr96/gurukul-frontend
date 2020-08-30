import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from "redux";
import * as UserProfileActionCreator from "../../actions/userprofile";
import {connect} from 'react-redux';
import ViewProfile from './ViewProfile';

class UserProfileMain extends React.Component{
    render(){
        return(
            <>
                <Switch>
                    <Route exact path="/user" render={(props)=><ViewProfile {...this.props} {...props}/>}/>
                    <Route path="/user/:id" render={(props)=><ViewProfile editMode={true} {...this.props} {...props}/>} />
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
    return bindActionCreators(UserProfileActionCreator, dispatch);
}

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfileMain);

export default UserProfile;