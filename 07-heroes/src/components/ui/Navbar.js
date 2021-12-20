import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    
    const {user:{name}, dispatch} = useContext(AuthContext); 

    const history =  useHistory();
    //usamos este hook debido a que como no el navbar no es una Route ya que es un componente no recibe history directamente,
    //para evitar tener que pasarle history por props está el hook, ya que así recuperamos history de manera + limpia
    
    const handleLogout = () => {
        dispatch({
            type: types.logout,
            
        })
        history.replace('/login');
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav me-3">

                    { 
                        (name) 
                            && 
                            <span className="nav-item nav-link text-info">
                                Hello {name}
                            </span>
                    }
                    <button 
                        className="nav-item nav-link btn btn-outline-primary"
                        onClick={handleLogout}
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}