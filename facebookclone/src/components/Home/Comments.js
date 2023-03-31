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

  return (
    <>
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
        <div className='posts__div comment__input'>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Post a comment"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <Button variant="primary"> Post </Button>

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
        </div>

      </div>
    </ >
  )
}

export default Comments


