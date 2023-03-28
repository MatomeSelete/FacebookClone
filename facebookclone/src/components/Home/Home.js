import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BsImages } from 'react-icons/bs';


import './Home.css'

import Matome from '../images/Matome.jpg'
import Tic from '../images/ticTacToe.png'
import Leo from '../images/Leo.jpeg'
import Ciara from '../images/Ciara.jpeg'
import Sarra from '../images/Sarra.jpeg'

function Home() {
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
              <Card.Img variant="top" src={Ciara}  />

            </Card>
          </div>

          <div className='stories__Cards'>
            <Card >
              <Card.Img variant="top" src={Leo}  />
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
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>


          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='newsfeed__cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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