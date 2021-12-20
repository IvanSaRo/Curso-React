import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import useCounter from './../../hooks/useCounter';
import './effects.css';

export default function MemoHook() {
    
    const { state:counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])
    
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>

            <p>{memoHeavyProcess}</p>

            <button className="btn btn-warning ml-3" onClick={increment}>+1</button>
            <button className="btn btn-danger" onClick={() => {setShow(!show)}}>Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
