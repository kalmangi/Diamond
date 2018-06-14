import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
//import App from './App';
import Home from './component/layout/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
