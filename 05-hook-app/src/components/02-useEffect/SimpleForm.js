import React, { useState } from 'react';
import './effects.css';
import Message from './Message';

export default function SimpleForm() {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })


    const { name, email} = formState;
    
    /* useEffect( () => {

    }, []);

    useEffect( () => {

    }, [formState]);

    useEffect( () => {

    }, [email]); */

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <br/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange} 
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange} 
                />
            </div>

            {( name === '123') && <Message />}
        </>
    )
}
