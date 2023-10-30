import { useState } from 'react'
import './styles/css/App.css'
import Menu from './components/Menu';
import Main from './components/Main';
import RightBar from './components/RightBar';



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
