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

function NewsFeed() {

    const [liked, setLiked] = useState(false);

  const handleNotification = ()=> {
    setLiked(true)
  }

  const handleNotificationNot = ()=> {
    setLiked(false)
  }

  return (
    <div>
        {/*================= NEWS FEED PART  =================*/}
        <div className='newsFeed'>

          <div className='newsfeed__cards'>
            <Card >
              <Card.Body>
                <Card.Title>Leo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Img variant="top" src={Leo} />
                <div className='reaction__button'>
                {liked ? (
                    <Button className='cardIcon' onClick={handleNotificationNot} > <AiOutlineLike /> 1.5k </Button>
                  ) : (
                    <Button className='cardIcon' onClick={handleNotification} > <AiFillLike /> 1.6 </Button>
                  )}
                  
                  <Link variant="primary" className="btn mx-2" to="/comments"> <BiMessage />300 </Link>
                  <Button variant="primary"> <RiShareForwardLine />1k </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card >
              <Card.Body>
                <Card.Title>Ciara</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                <Card.Img variant="top" src={Ciara} />
                <div className='reaction__button'>
                {liked ? (
                    <Button className='cardIcon' onClick={handleNotificationNot} > <AiOutlineLike /> 5.9k </Button>
                  ) : (
                    <Button className='cardIcon' onClick={handleNotification} > <AiFillLike /> 6k </Button>
                  )}
                  <Link variant="primary" className="btn mx-2" to="/comments"> <BiMessage />10.k </Link>
                  <Button variant="primary"> <RiShareForwardLine />2.9k </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card >
              <Card.Body>
                <Card.Title>Sarra</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                {/* <Card.Img variant="top" src={Sarra} /> */}
                <div className='reaction__button'>
                {liked ? (
                    <Button className='cardIcon' onClick={handleNotificationNot} > <AiOutlineLike /> 70k </Button>
                  ) : (
                    <Button className='cardIcon' onClick={handleNotification} > <AiFillLike /> 70.1k </Button>
                  )}
                  <Link variant="primary" className="btn mx-2" to="/comments"> <BiMessage />40.3k </Link>
                  <Button variant="primary"> <RiShareForwardLine />20.5k </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card >
              <Card.Body>
                <Card.Title>Tic</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Img variant="top" src={Tic} />
                <div className='reaction__button'>
                  {liked ? (
                    <Button className='cardIcon' onClick={handleNotificationNot} > <AiOutlineLike /> 700k </Button>
                  ) : (
                    <Button className='cardIcon' onClick={handleNotification} > <AiFillLike /> 700k </Button>
                  )}
                  <Link variant="primary" className="btn mx-2" to="/comments"> <BiMessage />500.6k </Link>
                  <Button variant="primary"> <RiShareForwardLine />100.5k </Button>
                </div>
              </Card.Body>
            </Card>
          </div>


        </div>
    </div>
  )
}

export default NewsFeed