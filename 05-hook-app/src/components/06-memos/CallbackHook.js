import React, { useCallback, useState } from 'react';
import './effects.css';
import { ShowIncrement } from './ShowIncrement';

export default function CallbackHook() {
    
    const [counter, setCounter] = useState(10);

    /* const increment = () => {
        setCounter(counter + 1);
    } */

    const increment = useCallback(
        (num = 1) => {
            setCounter(c => c + num);
        },
        [setCounter]
    )
    
    return (
        <div>
            <h1>useCallback hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
