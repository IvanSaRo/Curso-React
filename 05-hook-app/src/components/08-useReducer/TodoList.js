import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggle, handleRemove}) => {
    return (
        <ul className="list-group list-group-flush">
                    {
                        todos.map((todo, i) => (
                           <TodoListItem 
                            key={todo.id} 
                            todo={todo} 
                            index={i} 
                            handleToggle={handleToggle} 
                            handleRemove={handleRemove}/>
                        ))
                    }
                    </ul>
    )
}
