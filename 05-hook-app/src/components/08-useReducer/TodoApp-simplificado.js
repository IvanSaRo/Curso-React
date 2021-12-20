import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { todoReducer } from './todoReducer';

/* const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}] */


const init = () => {
    
    return JSON.parse(localStorage.getItem('todos') || []);
    /* return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }] */
}




export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    //la función init se llama y lo que retorne va a ser el initialState, que ahora en useReducer se representa con array vacío

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        localStorage.getItem('todos', )
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(description.trim().length < 2) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    const handleRemove = (todoId) => {
        console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }  

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map((todo, i) => (
                            <li
                                key={todo.id}
                                className="list-group-item"
                            >
                                <p 
                                    className={`${ todo.done && 'complete'}`}
                                    onClick={ () => handleToggle(todo.id)}
                                
                                >
                                    {i + 1}- {todo.desc}
                                </p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleRemove(todo.id)}
                                >
                                    Borrar
                                </button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="description" 
                            placeholder="Aprender..." 
                            autoComplete="off"
                            className="form-control"
                            onChange={handleInputChange}
                            value={description}
                        />
                        <button
                            className="btn btn-outline-primary mt-3 btn-lg btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
