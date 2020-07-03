import React , { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SignIncontainer from './Containers/SignIncontainer/SignIncontainer';
import Dashboardcontainer from './Containers/Dashboard/Dashboardcontainer';

class App extends Component{
   render()
   {
    return (
       <React.Fragment>

       <Router>
          
          <Switch>
              <Route exact path="/" component={SignIncontainer}></Route>
              <Route path="/dashboard" component={Dashboardcontainer}></Route>
          </Switch>
      </Router>
       </React.Fragment>
    );
   }
}

export default App;
