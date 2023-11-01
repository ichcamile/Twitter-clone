import { useState } from 'react'
import App from '../App';
import ItemMenu from "./item-menu/ItemMenu"
import { AiFillHome } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { MdOutlineNotifications, MdOutlinePeopleOutline} from 'react-icons/md';
import { BiEnvelope, BiBookmark} from 'react-icons/bi';
import { RiFileList3Line } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsPeople, BsTwitter } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import "./styles/css/menu.css"


function Menu() {
    return(
     <aside>
      <span className="iconBlue">{ <BsTwitter/>}</span>
      <ul>
        <span className="selectPage" ><ItemMenu iconUrl= {<FiHome/>} name="Home"/></span> 
        <ItemMenu iconUrl= {<HiOutlineHashtag/>} name="Explore"/>
        <ItemMenu iconUrl= {<MdOutlineNotifications/>} name="Notifications"/>
        <ItemMenu iconUrl= {<BiEnvelope/>} name="Messages"/>
        <ItemMenu iconUrl= {<BiBookmark/>} name="Bookmarks"/>
        <ItemMenu iconUrl= {<MdOutlinePeopleOutline/>} name="Communities"/>
        <ItemMenu iconUrl= {<RiFileList3Line/>} name="Lists"/>
        <ItemMenu iconUrl= {<RxPerson/>} name="Profile"/>
        <ItemMenu iconUrl= {<CgMoreO/>} name="More"/>
      </ul>
     </aside>
    )
  }


export default Menu;
