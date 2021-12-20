import React, { useState } from 'react';
import { MultipleCustomHooks } from './../03-examples/MultipleCustomHooks';
import './effects.css';

export default function RealExampleRef() {
    
 
    
    const [show, setShow] = useState(false);

    const handleButton = () => {
        setShow(!show);
    }
    
    return (
        <div>
            <h1>Real example using useRef</h1>
            <hr/>

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-outline-warning mt-3"
                onClick={handleButton}
                >Show/hide
            </button>

            
        </div>
    )
}
