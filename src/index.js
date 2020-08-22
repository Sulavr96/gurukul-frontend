import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Login from './components/registration/login.component';
import Registration from './components/registration/registration.component';
import SignInLinks from './components/navbar/SignInLinks.component';
import SignOutLinks from './components/navbar/SignOutLinks.component';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={SignOutLinks}/>
            </Switch>
            <Switch>
                <Route path="/login/" component={Login}/>
                <Route path="/signup/" component={Registration}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
