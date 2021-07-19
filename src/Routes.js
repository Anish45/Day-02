import React from 'react';
import {BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import Home from './Home';
import Contact from './Contact';

const Routes = () => {
    return(
    <Router>
        <Route>
            <Switch>
                <Route path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </Route>
    </Router>
    )
}

export default Routes;