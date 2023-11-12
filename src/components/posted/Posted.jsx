import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from 'react-icons/ai';
import girlfriend from "../../assets/profile-pic.png"
import "../posted/posted.css"
import { PiDotBold } from 'react-icons/pi';
import { LuMessageSquare } from 'react-icons/lu';
import { FiUpload } from 'react-icons/fi';



function Posted({ name, username, nickname, time, contentTweet }) {
  return (
    <div className='posted'>

      <header className='headerPosted'>
        <AiFillHeart />
        <p>{name} liked</p>
      </header>

      <div className='content'>
        <aside>
          <img className='profilePic' src={girlfriend} alt='profilePic' />
        </aside>



      </div>

      <div className='main'>

        <div className='secondHeader'>
            <h2>{username}</h2>
            <p>{nickname}</p>
            <div><PiDotBold /></div>
            <p> {time} min</p>
        </div>

        <div>
            <p>{contentTweet}</p>
        </div>
        
        <hr/>


        <div className='icons'>
          <div><LuMessageSquare/></div>
          <div><AiOutlineRetweet/></div>
          <div><AiFillHeart/></div>
          <div><FiUpload/></div>
      </div>
      </div>



      



    </div>
  )
}

export default Posted;