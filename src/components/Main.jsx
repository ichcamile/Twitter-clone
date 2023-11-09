import React from 'react'
import App from '../App';
import Tweet from "./tweet/Tweet"
import profilePic from './profile/Profile';
import girlfriend from "../assets/profile-pic.png";
import Uppersite from './uppersite/Uppersite';
import Posted from './posted/Posted';

function Main() {
  return (
    <>
      <Uppersite/>
        <Tweet
        girlfriend={girlfriend}
        tweetWrite="Olá, esse é o meu primeiro tweet"
        whoReply="Everyone can reply"/>
        <hr/>
      <Posted/>
    </>
  )
}

export default Main;
