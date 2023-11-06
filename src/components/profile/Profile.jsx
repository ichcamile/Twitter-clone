import React from 'react'


const Profile = ({ photo, namep, user, symbol }) => {
    return (
        <div className='profileContainer'>
            <img className='profilePic' src={photo} alt='profilePic'></img>
            <div className='profileSecond'>
                <p className='profileName'>{namep}</p>
                <p className='profileUser'>{user}</p></div>
            <span lassName='profileSymbol' >{symbol}</span>
        </div>
    )
}

export default Profile;