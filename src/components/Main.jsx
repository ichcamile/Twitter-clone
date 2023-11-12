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
      <Uppersite />
      <Tweet
        girlfriend={girlfriend}
        tweetWrite="Olá, esse é o meu primeiro tweet"
        whoReply="Everyone can reply" />
      <hr />
      <Posted
        name={"Gabriel Lindo Augusto"}
        username={"Camile"}
        nickname={"@ichcamile"}
        time={"10"}

      />
      <Posted
        name={"Sophia Grace"}
        username={"Daniel"}
        nickname={"@dannyboy"}
        time={"25m"}
        contentTweet={"Trying out new recipes in the kitchen and loving every moment of it! 🍲👩‍🍳 #CookingAdventures #Foodie"}
      />

      <Posted
        name={"Lily Johnson"}
        username={"Ryan"}
        nickname={"@ryanj"}
        time={"45min"}
        contentTweet={"Embracing the beauty of nature on a morning hike. 🌲🏞️ Feeling refreshed and alive! #NatureLover #MorningHike"}
      />

      <Posted
        name={"Elena Rodriguez"}
        username={"Carlos"}
        nickname={"@carlitos"}
        time={"1h"}
        contentTweet={"Creating art is my therapy. 🎨✨ Exploring new techniques and styles. #ArtisticJourney #Creativity"}
      />

      <Posted
        name={"Alex Turner"}
        username={"Emma"}
        nickname={"@emma_fitness"}
        time={"2h"}
        contentTweet={"Spending the day at the beach, soaking up the sun and enjoying the ocean breeze. 🏖️☀️ #BeachDay #Relaxation"}
      />

      <Posted
        name={"Olivia Smith"}
        username={"Michael"}
        nickname={"@mike_coffee"}
        time={"3h"}
        contentTweet={"Exploring the city streets and finding hidden gems. 🌆🗺️ #CityExploration #AdventureTime"}
      />

      <Posted
        name={"Nathan White"}
        username={"Sophie"}
        nickname={"@sophie_tweets"}
        time={"4h"}
        contentTweet={"Chasing sunsets and capturing the magical moments. 🌅📷 #SunsetChaser #PhotographyLover"}
      />

      <Posted
        name={"Isaac Brown"}
        username={"Aria"}
        nickname={"@ariasinger"}
        time={"5h"}
        contentTweet={"Reflecting on life's journey and counting my blessings. 🙏✨ #Gratitude #LifeReflections"}
      />


    </>
  )
}

export default Main;
