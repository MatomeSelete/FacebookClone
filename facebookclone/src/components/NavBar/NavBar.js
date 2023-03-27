import React from 'react'

import { GoSearch } from 'react-icons/go';
import { HiMenu } from 'react-icons/hi';
import { HiOutlineHome } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';
import { BsFillDisplayFill } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';


import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar__page'>
      <div className='topNav' >
        <h1 className='topnav__logo'>facebook</h1>
        <div className='topnav__icons'>
          <h2> <GoSearch /></h2>
          <h2> <HiMenu /></h2>
        </div>
      </div>
      <div className='bottomNav'>
        <h3><HiOutlineHome /></h3>
        <h3><FaUserFriends /> </h3>
        <h3><TbMessageCircle /> </h3>
        <h3><BsFillDisplayFill /> </h3>
        <h3><IoMdNotificationsOutline /> </h3>
        <h3><HiUserGroup /> </h3>

      </div>

    </div>
  )
}

export default NavBar