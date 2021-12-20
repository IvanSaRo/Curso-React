import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/login' exact component={LoginScreen}/>
                    <Route path='/' exact component={CalendarScreen}/>
                </Switch>
            </Router>
        </div>
    )
}
