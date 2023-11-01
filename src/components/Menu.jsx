import { useState } from 'react'
import App from '../App';
import ItemMenu from "./item-menu/ItemMenu"
import { AiFillHome } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { IoIosNotificationsOutline} from 'react-icons/io';
import { BiEnvelope, BiBookmark} from 'react-icons/bi';
import { RiFileList3Line } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsPeople } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';



function Menu() {
    return(
     <aside>
      <ul className='Menu'>
        <ItemMenu iconUrl= {<FiHome/>} name="Home"/>
        <ItemMenu iconUrl= {<HiOutlineHashtag/>} name="Explore"/>
        <ItemMenu iconUrl= {<IoIosNotificationsOutline/>} name="Notifications"/>
        <ItemMenu iconUrl= {<BiEnvelope/>} name="Messages"/>
        <ItemMenu iconUrl= {<BiBookmark/>} name="Bookmarks"/>
        <ItemMenu iconUrl= {<BsPeople/>} name="Communities"/>
        <ItemMenu iconUrl= {<RiFileList3Line/>} name="Lists"/>
        <ItemMenu iconUrl= {<RxPerson/>} name="Profile"/>
        <ItemMenu iconUrl= {<CgMoreO/>} name="More"/>
      </ul>
     </aside>
    )
  }


export default Menu;
