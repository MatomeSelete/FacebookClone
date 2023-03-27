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
          <div>
            <img src="" alt="profile Picture" />
          </div>

          <div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="What's on your mind Matome"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>

          <div>
            <BsImages />
          </div>


        </div>
      </div>






    </>

  )
}

export default Home