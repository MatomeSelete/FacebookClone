import React from 'react';
import { Outlet, Link } from "react-router-dom";

import './Friends.css';

function SideBar() {
  return (
    <div className='sideBarBody'>
        <div className='sideBar'>
          <p className='bottomNav__link'> <Link to='FriendsHome'> Home </Link> </p>
          <p className='bottomNav__link'> <Link to='FriendsList'> Friends </Link>  </p>
          <p className='bottomNav__link'> <Link to='FriendsRequest'> Friend request </Link>  </p>
          <p className='bottomNav__link'> <Link to='Birthdays'> Birthdays </Link>  </p>
        </div>
    <hr/>
    <Outlet />
    </div>

 
  )
}

export default SideBar