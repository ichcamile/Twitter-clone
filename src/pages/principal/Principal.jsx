import React from 'react'
import RightBar from "../../components/rightBar/RightBar"
import Menu from "../../components/menu/Menu"
import Main from "../../components/main/Main"
import "./principal.css"


function Principal() {
  return (
    <>
      <div className='wrapper'>
        <div className="menu" > <Menu /></div>
        <div className="main" >  <Main /></div>
        <div className="rightBar"> <RightBar /></div>
      </div>
    </>
  );
}

export default Principal;
