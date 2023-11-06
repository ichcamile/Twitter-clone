import React from 'react'
import App from '../App';
import Tweet from "./tweet/Tweet"
import profilePic from './profile/Profile';
import girlfriend from "../assets/profile-pic.png";



function Main() {
  return (
    <>
        <Tweet
        girlfriend={girlfriend}
        tweetWrite="Olá, esse é o meu primeiro tweet"
        whoReply="Everyone can reply"/>
    </>
  )
}

export default Main;
