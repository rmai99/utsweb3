import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = ['Blue ', 'Light '];
ReactDOM.render(<App items ={items}/>,
    document.getElementById('root'));
serviceWorker.register();