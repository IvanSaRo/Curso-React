import React, { useState } from 'react';
import useCounter from './../../hooks/useCounter';
import './effects.css';
import { Small } from './Small';

export default function Memorize() {
    
    const { state:counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    
    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <button className="btn btn-warning ml-3" onClick={increment}>+1</button>
            <button className="btn btn-danger" onClick={() => {setShow(!show)}}>Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
