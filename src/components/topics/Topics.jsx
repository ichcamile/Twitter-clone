import React from 'react';
import ItemTopic from '../itemTopic/ItemTopic';
import "../topics/topics.css"



const Topics = ({ topic}) => {
    return (
        <div className='topicsGeneral'>
            <header className='topicHeader'>
                <h2>{topic}</h2>
            </header>
            <ItemTopic
            country = "Columbia"
            topic = "AI Translates Thoughts into Text "
            many = "18.9"
            />
            <ItemTopic
            country = "Columbia"
            topic = "AI Translates Thoughts into Text "
            many = "18.9"
            />
            <ItemTopic
            country = "Columbia"
            topic = "AI Translates Thoughts into Text "
            many = "18.9"
            />
            <ItemTopic
            country = "Columbia"
            topic = "AI Translates Thoughts into Text "
            many = "18.9"
            />
            
        </div>
    )
}


export default Topics;