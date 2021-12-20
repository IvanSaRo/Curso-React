import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './effects.css';

export function Layout() {
    
    const {state, increment} = useCounter(1)
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
    
    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        const long = pTag.current.getBoundingClientRect();
        setBoxSize(long);        
    }, [quote])
    
    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>
                    
            <blockquote className="blockquote text-end">
                <p 
                    className="mb-2"
                    ref={pTag}
                    >{quote}
                </p>
            </blockquote>

            <pre>
                {
                    JSON.stringify(boxSize, null, 3)
                }
            </pre>
                    
            <button className="btn btn-success" onClick={increment}>
                Siguiente cita
            </button>
        </div>
    )
}
