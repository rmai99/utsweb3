import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

{/*const items = ['Merah ', 'Kuning ', 'Hjau ', 'Biru '];*/}
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();