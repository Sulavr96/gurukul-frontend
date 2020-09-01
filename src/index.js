import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.min.css'
import './assets/css/agency.min.css'
//Dashboard
//import './assets/css/pe-icon-7-stroke.css';
//import './assets/js/jquery.3.2.1.min.js';
//import './assets/js/bootstrap.min.js';
//import './assets/js/chartist.min.js';
//import './assets/js/bootstrap-notify.js';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import UserProfile from './components/profile/UserProfile';
import Login from './components/registration/login_component';
import Registration from './components/registration/registration.component';
import SignInLinks from './components/navbar/SignInLinks.component';
import SignOutLinks from './components/navbar/SignOutLinks.component';
import ForgotPassword from './components/registration/forgot_password.component';
import Home from './components/homepage/home'
import ResetPassword from './components/registration/reset_password.component';
import Dashboard from './components/dashboard/dashboard'
import Notice from './components/notice/notice_component';


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
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/user/notice/" component={Notice} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
