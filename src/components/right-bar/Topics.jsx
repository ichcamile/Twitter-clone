
import React from 'react';

const Topics = ({ title, topic, content, iconUrl }) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <h2>{topic}</h2>
            <p> {content}</p>
            <contentimg src={iconUrl} alt="topic-icon"/>
            {iconUrl}
            <button>Follow</button>
            <hr />
            <p>Show more</p>
        </div>
    )
}


export default Topics;