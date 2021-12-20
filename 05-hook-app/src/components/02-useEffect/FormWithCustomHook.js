import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

export default function FormWithCustomHooks() {
    
    /* const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    }) */

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })


    //const { name, email, password} = formState;
    const {name, email, password} = formValues;

   /*  const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
 */

    useEffect(() => {
        console.log('email cambió')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook</h1>
            <br/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }  
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
                    onChange={ handleInputChange } 
                />
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={ handleInputChange } 
                />
            </div>
         
                <button 
                    className="btn btn-primary"
                    type="submit"
                    >

                    Guardar
                </button>
        </form>
    )
}
