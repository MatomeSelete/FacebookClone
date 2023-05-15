import React from 'react';

import { SideBar, FriendsList, FriendsReuest, Birthdays, } from './index';


import './Friends.css'

function Friends() {
  return (
    <div>
      <SideBar/>
      <div>
        <FriendsList />
        <FriendsReuest />
        <Birthdays />
      </div>

    </div>
  )
}

export default Friends