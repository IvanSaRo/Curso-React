import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';




export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'ivan@gmail.com',
        password: 1234,
        password2: 1234,
        name: 'Iván'
    });
    
    const {email, password, password2, name} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()) {
            console.log('Formulario ok');
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false
        }else if(!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password !== password2 || password.length < 5) {
            dispatch(setError('Password must have at least 5 characters and match between them'));
            return false
        }
        dispatch(removeError());

        return true
    }
    
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form 
                onSubmit={ handleRegister }
                className="animate__animated animate__fadeIn animate__faster"
            >
                {msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                
                <input 
                    type="text"
                    placeholder="Name"
                    name="name" 
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={name}
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email" 
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={email}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    name="password" 
                    className="auth__input"
                    onChange={ handleInputChange }
                    value={password}
                />
                <input 
                    type="text"
                    placeholder="Confirm password"
                    name="password2" 
                    className="auth__input"
                    onChange={ handleInputChange }
                    value={password2}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                
                <Link 
                    to="/auth/login"
                    className="link "
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
