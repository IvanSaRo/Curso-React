import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router, Redirect, Switch
} from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch()
    

    // confirma si la app está revisando si el user está logado en firebase
    const [checking, setChecking] = useState(true);
    
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //mantener login si hay f5
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {

            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid))                
            }else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        })
    }, [dispatch, setChecking])

    if(checking) {
        return (
            <h1>Espere...</h1>
        )
    }
    
    
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={AuthRouter}
                            isAuthenticated={isLoggedIn}
                        />
                        <PrivateRoute 
                            exact path="/"
                            component={JournalScreen}
                            isAuthenticated={isLoggedIn}
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
