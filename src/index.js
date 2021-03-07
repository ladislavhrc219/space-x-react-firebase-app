import React from 'react';
import ReactDOM from 'react-dom';
// 1step import this in ROUTERING 
import {BrowserRouter} from 'react-router-dom'

import './index.css';
//bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import App from './App';

ReactDOM.render(
    // next to do: wrap it around the applicaton 
    <React.StrictMode>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
  </React.StrictMode>,


 document.getElementById('root'));


