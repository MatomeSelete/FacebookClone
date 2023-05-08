// import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';


// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import { BsImages } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
// import { BiMessage } from 'react-icons/bi';
// import { RiShareForwardLine } from 'react-icons/ri';
import { AiFillLike } from 'react-icons/ai';

// import Matome from '../images/Matome.jpg'
// import Tic from '../images/ticTacToe.png'
import Leo from '../images/Leo.jpeg'
// import Ciara from '../images/Ciara.jpeg'
// import Sarra from '../images/Sarra.jpeg'

import './Home.css'

function Comments() {
  // let navigate = useNavigate();

  // const values = [true];

  // const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setShow(true);
  // }

  // const handleClickScroll = () => {
  //   const element = document.getElementById('section-1');
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
    <div className="newsfeed__cards__id">
          
          
      <div className='newsfeed__cards'>
        
        <Card >
          <Card.Body>
            <Card.Title>Leo</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Img variant="top" src={Leo} />
          </Card.Body>
        </Card>
      </div>
      </div>


      {/* =================================== reactions Section ======================================== */}

      <div className="reactions">
        <p>
          <AiOutlineLike />
        </p>

        <p>
          <AiFillLike />
        </p>

        <p>
          <AiOutlineLike />
        </p>

        <p>
          <AiFillLike />
        </p>

        <p>100k</p>
      </div>


      {/* ================================== searchpost Section ======================================== */}

      <div className="searchpost">
        <div className='posts__div__comment__input'>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Post a comment"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="postbtn">
          <Button variant="primary"> Post </Button>
        </div>
      </div>


      {/* ================================== Comments Section ============================================ */}

      <div className="Comments">
        <div className="Comment">
          <Card >
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="Comment__reactions">
            <Card >
              <Card.Body>
                  <div className="Comment__reaction">
                    <div className="timestamp">
                      <p>10hr</p>
                    </div>
                    <div className="likes">
                      <p>Like</p>
                    </div>
                    <div className="reacted">
                      <p> <AiFillLike /> </p>
                    </div>
                  </div>
              </Card.Body>
            </Card>
          </div>

          {/* <div className="replies">
          <button className="btn-scroll" onClick={handleClickScroll}>
          View more
        </button>
          </div> */}

          <div id="section-1" className="responds">
            <Card >
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          
        </div>

        <div className="Comment">
          <Card >
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="responds">
            <Card >
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>


         <div className="Comment">
          <Card >
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="responds">
            <Card >
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>


        {/* <div className="Comment">
          <Card >
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="responds">
            <Card >
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div> */}

      </div>
    </ >
  )
}

export default Comments


