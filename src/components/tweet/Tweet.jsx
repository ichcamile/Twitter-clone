import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { ImImage } from 'react-icons/im';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiBarChart, BiCalendar } from 'react-icons/bi';
import { MdPublic } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';


import "./tweet.css"



const Tweet = ({ girlfriend, tweetWrite, whoReply }) => {
    return (
        <div className='tweet'>
            <div className='topTweet'>
                <h2>For you</h2>
                <h2>Following</h2>
                <div>{<FiSettings />}</div>
            <div />
                <hr />
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
                <div className='icons'>
                    <div>{<ImImage />}</div>
                    <div>{<AiOutlineFileGif />}</div>
                    <div>{<BiBarChart />}</div>
                    <div>{<HiOutlineEmojiHappy />}</div>
                    <div>{<BiCalendar />}</div>
                </div>
            </div>
        </div>
    )
}

Tweet.propTypes = {
    girlfriend: PropTypes.string.isRequired,
    tweetWrite: PropTypes.string.isRequired,
    whoReply: PropTypes.string.isRequired,

};


export default Tweet;