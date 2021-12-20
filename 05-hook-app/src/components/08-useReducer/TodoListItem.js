import React from 'react'

export const TodoListItem = ({todo, index, handleToggle, handleRemove}) => {
    return (
    <li
        className="list-group-item"
    >
        <p 
            className={`${ todo.done && 'complete'}`}
            onClick={ () => handleToggle(todo.id)}
        
        >
            {index + 1}- {todo.desc}
        </p>
        <button 
            className="btn btn-danger"
            onClick={() => handleRemove(todo.id)}
        >
            Borrar
        </button>
    </li>
    )
}
