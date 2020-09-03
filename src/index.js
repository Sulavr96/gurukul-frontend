import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.min.css'
import './assets/css/agency.min.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import UserProfile from './components/profile/UserProfile';
import Login from './components/registration/login_component';
import Registration from './components/registration/registration.component';
import ForgotPassword from './components/registration/forgot_password.component';
import Home from './components/homepage/home'
import ResetPassword from './components/registration/reset_password.component';
import Notice from './components/notice/notice_component';
import SDashboard from './components/dashboard/student/student';
import TDashboard from './components/dashboard/teacher/teacher';
import T_home from './components/dashboard/teacher/home';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login/" component={Login}/>
                <Route path="/signup/" component={Registration}/>
                <Route path="/forgotpassword/" component={ForgotPassword}/>
                <Route path="/password-reset/" component={ResetPassword}/>
                <Route path="/user/profile" component={UserProfile}/>
                <Route path="/user/notice/" component={Notice} />
                <Route path="/dashboard/teacher" component={TDashboard} />
                <Route path="/dashboard/student" component={SDashboard} />
                <Route path="/teacherhome" component={T_home} />
            
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
