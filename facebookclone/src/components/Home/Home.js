import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsImages } from 'react-icons/bs';

import './Home.css'

function Home() {
  return (

    <>

      <div className='homeBody'>
        <div className='posts'>
          <div className='posts__div'>
            <img src="" alt="profile Picture" />
          </div>

          <div className='posts__div posts__input'>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="What's on your mind Matome"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <div className='posts__div'>
            <div className='photes'>
              <BsImages />
              <p>Photo</p>
            </div>
          </div>
        </div>

        <div className='stories'>

        </div>
      </div>






    </>

  )
}

export default Home