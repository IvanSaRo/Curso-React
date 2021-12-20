import React, { useEffect, useState } from 'react';

export default function Message() {
    
    const [coords, setcCords] = useState({x:0, y: 0})
    const {x, y} = coords;
    
    
    useEffect(() => {
        //effect
        //console.log('componente montado')
        
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setcCords(coords);
        }
        
        window.addEventListener('mousemove', mouseMove);
        return () => {
        //cleanup
        //console.log('componente desmontado')

        window.removeEventListener('mousemove', mouseMove);
        }
    }, [/* input */])
    
    return (
        <div>
            <h1>Fiera</h1>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
