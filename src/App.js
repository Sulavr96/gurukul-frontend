import React from 'react';
import { Switch , Route} from 'react-router-dom';
import SignOutLinks from './components/navbar/SignOutLinks.component';
import UserProfile from './components/profile';

class App extends React.Component {

    render(){
        return (
            <Switch>
                    <Route exact path="/" component={SignOutLinks} />                        
                    <Route path="/user">
                        <UserProfile/>
                    </Route>
            </Switch>
        );
    };
}

export default App;
