import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PrimeraApp } from './PrimeraApp';



const root = document.querySelector('#root');

//ReactDOM.render(<Counter value={0} /> , root);
ReactDOM.render(<PrimeraApp saludo='Goku' /> , root);
