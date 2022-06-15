import React from 'react';
//react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Home from './Home';
import Tickets from './Tickets';
import Error from './Error';
import Mint from './Mint';

//navbar
import Navbar from './Navbar';


const ReactRouterSetup = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/tickets'>
                    <Tickets/>
                </Route>
                <Route path='/mint'>
                    <Mint/>
                </Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup