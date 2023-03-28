import React from 'react'
import { useState } from 'react';

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


import './Home.css'

import Matome from '../images/Matome.jpg'
import Tic from '../images/ticTacToe.png'
import Leo from '../images/Leo.jpeg'
import Ciara from '../images/Ciara.jpeg'
import Sarra from '../images/Sarra.jpeg'

function Home() {

  const [liked, setLiked] = useState(false);

  const handleNotification = ()=> {
    setLiked(true)
  }

  const handleNotificationNot = ()=> {
    setLiked(false)
  }
  return (

    <>

      <div className='homeBody'>

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
        </div>


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
                  <Button variant="primary"> <BiMessage />300 </Button>
                  <Button variant="primary"> <RiShareForwardLine />1k </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card >
              <Card.Body>
                <Card.Title>Ciara</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Img variant="top" src={Ciara} />
                <div className='reaction__button'>
                {liked ? (
                    <Button className='cardIcon' onClick={handleNotificationNot} > <AiOutlineLike /> 5.9k </Button>
                  ) : (
                    <Button className='cardIcon' onClick={handleNotification} > <AiFillLike /> 6k </Button>
                  )}
                  <Button variant="primary"> <BiMessage />10.k </Button>
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
                <Card.Img variant="top" src={Sarra} />
                <div className='reaction__button'>
                {liked ? (
                    <Button className='cardIcon' onClick={handleNotificationNot} > <AiOutlineLike /> 70k </Button>
                  ) : (
                    <Button className='cardIcon' onClick={handleNotification} > <AiFillLike /> 70.1k </Button>
                  )}
                  <Button variant="primary"> <BiMessage />40.3k </Button>
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
                  <Button variant="primary"> <BiMessage />500.6k </Button>
                  <Button variant="primary"> <RiShareForwardLine />100.5k </Button>
                </div>
              </Card.Body>
            </Card>
          </div>


        </div>
      </div>
    </>

  )
}

export default Home













// <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={Leo}
//                 alt="First slide"
//                 style={{
//                   height: "100px"
//                 }}
//               />
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={Tic}
//                 alt="Second slide"
//               />

//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={Ciara}
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>
//                   Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>