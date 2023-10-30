import { useState } from 'react'
import RightBar from "../../components/RightBar"
import Menu from "../../components/Menu"
import Main from "../../components/Main"



function Principal() {
  return (
    <>
      <div className='Wrapper'>
        <Menu className= "menu"/>
        <Main className= "main" />
        <RightBar className= "rightBar"/>
      </div>

    </>
  );
}

export default Principal;
