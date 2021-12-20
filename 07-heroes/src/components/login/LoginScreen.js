import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export default function LoginScreen({history}) {
    
    const info = useContext( AuthContext );
    const {dispatch} = useContext( AuthContext );
    
    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        
        //history.push('/'); 
        //Esta instrucción lleva a una página pero se queda en el historial, para casos como un login unsamos history.replace
        //que substituye en el historial la entrada así después de logarnos si damos atrás no volvemos al login
        dispatch({
            type: types.login,
            payload: {
                name: 'Iván'
            }
        })
        history.replace(lastPath); 
    }
    
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>

            <button
                className="btn btn-primary mt-3"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
