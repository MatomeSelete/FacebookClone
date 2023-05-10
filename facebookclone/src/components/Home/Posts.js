import React from 'react'
// import { useState } from 'react';
// import { Link, useNavigate, useParams } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import { BsImages } from 'react-icons/bs';
// import { AiOutlineLike } from 'react-icons/ai';
// import { BiMessage } from 'react-icons/bi';
// import { RiShareForwardLine } from 'react-icons/ri';
// import { AiFillLike } from 'react-icons/ai';

import Matome from '../images/Matome.jpg'
// import Tic from '../images/ticTacToe.png'
// import Leo from '../images/Leo.jpeg'
// import Ciara from '../images/Ciara.jpeg'
// import Sarra from '../images/Sarra.jpeg'

import './Home.css'

function Posts() {
  return (
    <div>

        {/*====================== POSTS PART  =====================*/}
        <div className='posts'>
          <div className='posts__div' >
            <img className='posts__div__img' src={Matome} alt="profile Picture" />
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

    </div>
  )
}

export default Posts