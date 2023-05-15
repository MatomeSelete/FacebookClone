import React from 'react';
import { Outlet, Link } from "react-router-dom";

function SideBar() {
  return (
    <div>

<div>



<div className='bottomNav'>
  <h3 className='bottomNav__link'> <Link to='/FriendsList'> Home </Link> </h3>
  <h3 className='bottomNav__link'> <Link to='/FriendsRequest'> Friend request </Link>  </h3>
  <h3 className='bottomNav__link'> <Link to=''> All friends </Link>  </h3>
  <h3 className='bottomNav__link'> <Link to='/Birthdays'> Birthdays </Link>  </h3>
</div>
<hr/>
<Outlet />

</div>

    </div>
  )
}

export default SideBar