import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import App from './App';
import './index.css';

import About from './components/About'
import Repos from './components/Repos'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('root'))