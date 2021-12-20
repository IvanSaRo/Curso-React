import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function CounterApp({value = 10}) {
    
    const [ counter, setCounter ] = useState(0);
    
    const handleAdd = (e) => {
        setCounter( (c) => c +1 );
    }

    const handleSubstract = (e) => {
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( () => value);
    }
    
    return (
        <>
          <h1>CounterApp</h1>
          <h2>{counter}</h2>  
          <button onClick={handleAdd}>+1</button>
          <button onClick={reset}>Reset</button>
          <button onClick={handleSubstract}>-1</button>
        </>
    )
}
CounterApp.propTypes = {
    saludo: PropTypes.number
}