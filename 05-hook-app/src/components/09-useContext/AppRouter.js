import React from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { LogOutScreen } from './LogoutScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
       <Router>
           <div>
                <NavBar />               
                <div className="container">  
                    <Switch>
                        <Route exact path="/logout" component={LogOutScreen}/>
                        <Route exact path="/login" component={LoginScreen}/>
                        <Route exact path="/" component={HomeScreen}/>

                        <Redirect to="/" />
                    </Switch>
                </div> 
           </div>
       </Router> 
    )
}
