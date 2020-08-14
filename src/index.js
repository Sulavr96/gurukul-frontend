import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import EditProfile from './Components/EditProfile';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/profile" component={UserProfile}/>
                <Route path="/edit" component={EditProfile}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
