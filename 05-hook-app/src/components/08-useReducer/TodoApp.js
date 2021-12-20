import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
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

   

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        localStorage.getItem('todos', )
    }, [])

    

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

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleToggle={handleToggle} 
                        handleRemove={handleRemove}/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
