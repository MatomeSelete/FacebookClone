import React from 'react'
import { Outlet, Link } from "react-router-dom";

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
        <h3 className='bottomNav__link'> <Link to='/'> <HiOutlineHome /> </Link>  </h3>
        <h3 className='bottomNav__link'> <Link to='/friends'> <FaUserFriends /> </Link>  </h3>
        <h3 className='bottomNav__link'> <Link to='/message'> <TbMessageCircle /> </Link>  </h3>
        <h3 className='bottomNav__link'> <Link to='/shorts'> <BsFillDisplayFill /> </Link>  </h3>
        <h3 className='bottomNav__link'> <Link to='/notification'> <IoMdNotificationsOutline /> </Link>  </h3>
        <h3 className='bottomNav__link'> <Link to='/groups'> <HiUserGroup /> </Link>  </h3>

      </div>
      <hr/>
      <Outlet />
    </div>
    
  )
}

export default NavBar