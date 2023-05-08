import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BsImages } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiFillLike } from 'react-icons/ai';


import Matome from '../images/Matome.jpg'
import Tic from '../images/ticTacToe.png'
import Leo from '../images/Leo.jpeg'
import Ciara from '../images/Ciara.jpeg'
import Sarra from '../images/Sarra.jpeg'

import './Home.css'

function Stories() {
  return (
    <div>

        {/*================= STORIES PART  =================*/}

        <div className='stories'>
          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Tic} />
            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Ciara} />

            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Leo} />
            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Sarra} />
            </Card>
          </div>

          <div className='stories__Cards' >
            <Card >
              <Card.Img variant="top" src={Tic} />

            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Ciara} />

            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Leo} />
            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Leo} />
            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Sarra} />
            </Card>
          </div>

        </div>

    </div>
  )
}

export default Stories