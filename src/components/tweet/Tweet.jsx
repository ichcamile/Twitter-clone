import { useState } from 'react'


function Tweet(photo, iconStar, imageSymbol, gifSymbol, lines, emojiSymbol, calendarSymbol,tweetWrite, whoReply, worldSymbol) {
    return (
        <div>
            <div className='topTweet'>
                <h2>Home</h2>
                <span>{iconStar}</span>
            </div>
            <hr/>
            <div>
            <img className='profilePic' src={photo} alt='profilePic'></img>
                <div>
                    <h3>{tweetWrite}</h3>
                    <div>
                        <span>{worldSymbol}</span>
                        <p>{whoReply}</p>
                    </div>
                </div>
            </div>
            <div>
                <span>{imageSymbol}</span>
                <span>{gifSymbol}</span>
                <span>{lines}</span>
                <span>{emojiSymbol}</span>
                <span>{calendarSymbol}</span>
            </div>
        </div>
    )
}

export default Tweet



