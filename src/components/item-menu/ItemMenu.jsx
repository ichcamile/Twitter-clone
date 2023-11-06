import React from 'react'


const ItemMenu = ({ iconUrl, name }) => {
  return (
    <>
      <li className="container" >
        <span className="iconUrl">{iconUrl}</span>
        <span className="categories" >{name}</span>
      </li>
    </>
  )
}

export default ItemMenu;
