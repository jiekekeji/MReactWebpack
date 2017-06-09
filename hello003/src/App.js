import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import './style/app.css'

import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'

const BasicExample = () => (
    <Router>
        <div >
            <ul className="top-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics/topic1">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}>
                <Redirect from="/topics" to="/topics/topic1"/>
            </Route>
        </div>
    </Router>
)

export default BasicExample
