import PropTypes from 'prop-types';
import React from 'react';

export const PrimeraApp = ({saludo ='Hola mundo'}) => {


return (
    <>
        <h1>Hola soy {saludo}</h1>
        <div>Holi</div>
    </>    
    )

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string
}