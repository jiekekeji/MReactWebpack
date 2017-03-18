# react-router 4.0.0 初识
  1、安装相关依赖：
  <pre>
      <code>
         "dependencies": {
           "react": "^15.4.2",
           "react-dom": "^15.4.2",
           "react-router": "^4.0.0",
           "react-router-dom": "^4.0.0"
         },
      </code>
  </pre>
  
  2、新建components目录，在里面创建几个组件
  
  ![image](https://github.com/jiekekeji/MReactWebpack/blob/master/hello2-react/public/img1.png)
  
  3、App.js中:
  
  <pre>
    <code>
    import React from 'react';
    import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom'
    import './style/app.css'
    
    import Home from './components/Home'
    import About from './components/About'
    import Topics from './components/Topics'
    
    const BasicExample = () => (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
    
                <hr/>
    
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </div>
        </Router>
    )
    
    export default BasicExample
    </code>
  </pre>
  
  4、效果：
  ![image](https://github.com/jiekekeji/MReactWebpack/blob/master/hello2-react/public/img2.gif)