import { useState } from "react";

export default function useCounter(initialState = 10) {
    
    const [state, setstate] = useState(initialState);

    const increment = (/* factor = 2 */) =>  {
        setstate(state + 1);
    }

    const decrement = (/* factor = 2 */) => {
        setstate(state - 1);
    }

    const reset = (/* factor = 0 */) => 
    setstate(initialState);
    
    return {
        state, 
        increment,
        decrement,
        reset
    }
}