import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/semantic.min.css'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
