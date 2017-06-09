import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import Topic1 from '../components/Topic1'
import Topic2 from '../components/Topic2'
import Topic3 from '../components/Topic3'
import '../style/topics.css'


const Topics = ({match}) => (
    <div className="topic-contianer">
        <h2>Topics组件</h2>
        <ul className="top-nav">
            <li>
                <Link to="/topics/topic1">
                    Topic1
                </Link>
            </li>
            <li>
                <Link to="/topics/topic2">
                    Topic2
                </Link>
            </li>
            <li>
                <Link to="/topics/topic3">
                    Topic3
                </Link>
            </li>
        </ul>

        <Route path="/topics/topic1" component={Topic1}/>
        <Route path="/topics/topic2" component={Topic2}/>
        <Route path="/topics/topic3" component={Topic3}/>

        {/*<Route path={`${match.url}/:topicId`} component={Topic}/>*/}
        {/*<Route exact path={match.url} render={() => (*/}
        {/*<h3>Please select a topic.</h3>*/}
        {/*)}/>*/}
    </div>
)


export default Topics;