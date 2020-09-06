import React from 'react';
import { Switch , Route} from 'react-router-dom';
import UserProfile from './components/profile';
import Home from './components/homepage/home';
import Dashboard from './components/dashboard/dashboard';
import NoticeMain from './components/notice/notice_main'
import Teacher_Dashboard from './components/dashboard/teacher/index';
import Openvidu from './components/videoapp/openvidu';
import Student_Dashboard from './components/dashboard/student/index';


class App extends React.Component {

    render(){
        return (
            <Switch>
                    <Route exact path="/" component={Home} />   
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>                    
                    <Route path="/user">
                        <UserProfile/>
                    </Route>
                    <Route path="/teacher/">
                        <Teacher_Dashboard/>
                    </Route>
                    <Route path="/student/">
                        <Student_Dashboard/>
                    </Route>
                    <Route path="/notice/">
                        <NoticeMain/>
                    </Route>
                    <Route path="/videosession/">
                        <Openvidu/>
                    </Route>
            </Switch>
        );
    };
}

export default App;
