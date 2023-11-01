import { useState } from 'react'
import RightBar from "../../components/RightBar"
import Menu from "../../components/Menu"
import Main from "../../components/Main"
import "./principal.css"


function Principal() {
  return (
    <>
      <div className='wrapper'>
        <div className="menu" ><Menu /></div>
        <div className="main" > <Main /></div>
        <div className="rightBar"><RightBar/></div>
      </div>

    </>
  );
}

export default Principal;
