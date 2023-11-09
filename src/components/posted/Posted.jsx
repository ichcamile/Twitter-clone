import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import girlfriend from "../../assets/profile-pic.png"
import "../posted/posted.css"
import { PiDotBold } from 'react-icons/pi';


function Posted({ name, username, nickname, time }) {
  return (
    <div className='posted'>
      <header className='headerPosted'>
        <div><AiFillHeart /></div>
        <p>{name} liked</p>
      </header>
      <div className='teste'>
        <aside>
          <img className='profilePic' src={girlfriend} alt='profilePic' />
        </aside>
        <div>
          <div className='secondHeader'>
            <h2>{username}</h2>
            <p>{nickname}</p>
            <div><PiDotBold /></div>
            <p> {time} min</p>
          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Posted;