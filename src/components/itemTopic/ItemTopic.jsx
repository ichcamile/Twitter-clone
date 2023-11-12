import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi';
import "../itemTopic/itemtopic.css"

function ItemTopic({country, topic, many }) {
  return (
    <div className='itemTopicDisplay'>
      <div className='columnFirst'>
        <p>Trending in {country}</p>
        <h2>{topic}</h2>
        <p>{many} Tweets</p>
      </div>

       <div className='columnSecond'>
        <FiMoreHorizontal/>
       </div>

    </div>
  )
}

export default ItemTopic
