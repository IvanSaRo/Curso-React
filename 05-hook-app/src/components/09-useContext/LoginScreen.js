import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    
    const {user, setUser} = useContext(UserContext);
    
    const newUser = {id:12345, name: 'Iván'}
    
    return (
        <div>
             <h1>Login Screen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => setUser(newUser)}
            >
                Login
            </button>
            <pre className="container">
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
