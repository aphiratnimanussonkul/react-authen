import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Authentication from './components/Authentication'
ReactDOM.render(<Authentication />, document.getElementById('root'));

serviceWorker.unregister();
