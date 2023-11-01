
import { BiX } from 'react-icons/bi';

function Topics({ title, topic, content, icon }) {
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <h2>{topic}</h2>
            <p> {content}</p>
            <img>{icon}</img>
            <button>Follow</button>
            <hr />
            <p>Show more</p>
        </div>
    )
}


export default Topics;
