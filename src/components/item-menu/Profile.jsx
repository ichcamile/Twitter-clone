import React from 'react'


const Profile = ({ photo, namep, user, symbol }) => {
    return (
        <div className='profileContainer'>
            <img src={photo} alt='profilePic'></img>
            <div className='profileSecond'><p>{namep}</p>
                <p>{user}</p></div>
            <span lassName='profileSymbol' >{symbol}</span>
        </div>
    )
}


export default Profile;