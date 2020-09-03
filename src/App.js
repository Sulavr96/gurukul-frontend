import React from 'react';
import { Switch , Route} from 'react-router-dom';
import UserProfile from './components/profile';
import Home from './components/homepage/home';
import Dashboard from './components/dashboard/dashboard';
import Notice from './components/notice'


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
                    <Route path="/notice/">
                        <Notice/>
                    </Route>
            </Switch>
        );
    };
}

export default App;
