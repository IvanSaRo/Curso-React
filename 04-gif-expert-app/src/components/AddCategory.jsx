import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function AddCategory({setCategories}) {
    
     const [inputValue, setInputValue] = useState('');

     const handleInputChange = (e) => {
         setInputValue(e.target.value);
     }

     const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        }
        
     }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
