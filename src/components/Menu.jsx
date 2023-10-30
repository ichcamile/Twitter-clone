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
        <ItemMenu  icon= {<FiHome/>} name="Home"/>
        <ItemMenu icon= {<HiOutlineHashtag/>} name="Explore"/>
        <ItemMenu icon= {<IoIosNotificationsOutline/>} name="Notifications"/>
        <ItemMenu icon= {<BiEnvelope/>} name="Messages"/>
        <ItemMenu icon= {<BiBookmark/>} name="Bookmarks"/>
        <ItemMenu icon= {<BsPeople/>} name="Communities"/>
        <ItemMenu icon= {<RiFileList3Line/>} name="Lists"/>
        <ItemMenu icon= {<RxPerson/>} name="Profile"/>
        <ItemMenu icon= {<CgMoreO/>} name="More"/>

      </ul>
     </aside>
    )
  }

export default Menu;
