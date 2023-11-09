import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import girlfriend from "../../assets/profile-pic.png"


function Posted({ name, username, nickname, time }) {
  return (
    <div>
      <header>
        <div><AiFillHeart /></div>
        <p>{name} liked</p>
      </header>
      <aside>
        <img className='profilePic' src={girlfriend} alt='profilePic' />
      </aside>
      <div>
        <div>
          <h2>{username}</h2>
          <p>{nickname}</p>
          <div></div>
          <p> {time} min</p>
          <div></div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Posted;