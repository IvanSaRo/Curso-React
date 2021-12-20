import React, { useRef } from 'react';
import './effects.css';

export default function FocusScreen() {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    
    return (
        <div>
            <h1>Focus</h1>
            <hr/>

            <input 
                type="text" 
                className="form-control mb-3" 
                placeholder="Nombre" 
                ref={inputRef}
                />
            <button 
                className=" btn btn-outline-primary"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
