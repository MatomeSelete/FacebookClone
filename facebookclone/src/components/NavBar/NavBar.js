import React from 'react'

import { GoSearch } from 'react-icons/go';
import { HiMenu } from 'react-icons/hi';


import './NavBar.css'

function NavBar() {
  return (
    <div>
      <div className='topNav' >
        <h1>facebook</h1>

        <GoSearch />
        <HiMenu />
      </div>

    </div>
  )
}

export default NavBar