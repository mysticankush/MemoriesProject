import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import MainMemory from './memory';
const AppMain=()=>{
    return(
        <Router>
            
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/memory" component={MainMemory} />
            </Switch>
        </Router>
    )
}
export default AppMain;