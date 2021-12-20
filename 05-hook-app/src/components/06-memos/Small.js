import React, { memo } from 'react';

export const Small = memo(({value}) => {
   
    console.log('Fui llamado');

    return (
        <small>
            {value}
        </small>
    )
})
