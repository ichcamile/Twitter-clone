import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


function Posted(name) {
  return (
    <div>
      <header>
        <div><AiFillHeart /></div>
        <p>{name} liked</p>
      </header>
      <aside>
        <img className='profilePic' src={girlfriend} alt='profilePic' />
      </aside>
      <main></main>

    </div>
  )
}

export default Posted;
<div className='middleTweet'>
  <img className='profilePic' src={girlfriend} alt='profilePic' />
  <div>
    <p>{tweetWrite}</p>
    <div className='replyTweet'>
      <div>{<MdPublic />}</div>
      <p>{whoReply}</p>
    </div>
  </div>
</div>