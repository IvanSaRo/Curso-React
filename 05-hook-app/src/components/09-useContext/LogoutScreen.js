import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LogOutScreen = () => {
    
    const {user, setUser} = useContext(UserContext);
    
    
    return (
        <div>
             <h1>Logout Screen</h1>
            <hr/>
            <button
                className="btn btn-danger"
                onClick={() => setUser({})}
            >
                Logout
            </button>
            <pre className="container">
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
