import React from 'react'
import { FiSettings } from 'react-icons/fi';
import "./uppersite.css"

function Uppersite() {
  return (
    <div className='uppersite'>
        
      <div className='uppertopics'>
                <h2>For you</h2>
                <h2>Following</h2>
            <div />
        <div className='setting'>{<FiSettings />}</div>
    </div>
    
    </div>
  )
}


export default Uppersite;
