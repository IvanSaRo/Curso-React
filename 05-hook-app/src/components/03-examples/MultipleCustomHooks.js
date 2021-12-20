import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './effects.css';

export function MultipleCustomHooks() {
    
    const {state, increment} = useCounter(1)
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
    
    const {author, quote} = !!data && data[0];
    
    return (
        <div>
            <h1>Breaking Bad quotes</h1>
            <hr/>

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-success" onClick={increment}>
                Siguiente cita
            </button>
        </div>
    )
}
