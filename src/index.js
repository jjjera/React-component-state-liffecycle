import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import TypeOne from './compoType/typeCompo';
//import Extractprop from './compoType/propFile';
//import Details from './stateEx/user';
import Life from './lifecycle/comp-life-cycle' 
//import Tick from './lifecycle/tick'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Life />, document.getElementById('root'));
//setInterval(<Tick date={new Date()} />, 1000);
registerServiceWorker();
