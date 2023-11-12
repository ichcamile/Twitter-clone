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
        <span><AiFillHeart /></span>
        <p>{name} liked</p>
      </header>

      <div className='content'>
        <aside className='photoAside'>
          <img className='profilePosted' src={girlfriend} alt='profilePic' />
        </aside>
        <div className='main'>

          <div className='secondHeader'>
            <h2>{username}</h2>
            <p>{nickname}</p>
            <div><PiDotBold /></div>
            <p> {time} min</p>
          </div>

          <div className='contentTweet'>
            <p>{contentTweet}</p>
          </div>
        </div>


       
      </div>
      <hr />
        <div className='icons'>
          <div className='itemIcon' ><LuMessageSquare /><p>5</p></div>
          <div className='itemIcon'><AiOutlineRetweet /><p>10</p></div>
          <div className='itemIcon'><AiFillHeart /><p>7</p></div>
          <div className='itemIcon'><FiUpload /><p>8</p></div>
        </div>


    </div>
  )
}

export default Posted;