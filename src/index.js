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
import { BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom';
import Login from './components/registration/login_component';
import Registration from './components/registration/registration.component';
import ForgotPassword from './components/registration/forgot_password.component';
import ResetPassword from './components/registration/reset_password.component';
import NoticeMain from './components/notice/notice_main''
import Home from './components/homepage/home';

const AuthenticatedRoute = ({component:Component, ...rest})=>{
    const token = localStorage.getItem('token');
    return <Route
        {...rest}
        render ={(props) => (
            !!token ? <Component {...props}/>
                : <Redirect
                    to='/login'
                />
        )
        }
    />
}



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
=
                <Route exact path="/login/" component={Login}/>
                <Route exact path="/signup/" component={Registration}/>  
                <Route exact path="/forgotpassword/" component={ForgotPassword}/>
                <Route exact path="/password-reset/" component={ResetPassword}/>
                <AuthenticatedRoute path="/" component={App}/>
                <Route exact path="/notice/" component={NoticeMain} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
