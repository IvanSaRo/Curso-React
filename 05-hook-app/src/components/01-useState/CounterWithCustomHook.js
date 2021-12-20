import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';


export default function CounterWithCustomHook() {
    
    const {state:counter, increment, decrement, reset} = useCounter(100);
    
    return (
        <div>
            <h1>Counter with hook: {counter}</h1>
            <hr/>

            <button className="btn btn-primary" onClick={() => increment(2)}>+ 1</button>
            <button className="btn btn-success" onClick={() => decrement(2)}>- 1</button>
            <button className="btn btn-danger" onClick={() => reset(5)}>Reset</button>

        </div>
    )
}
