// import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';

// import { NavBar, Friends, Shorts, Groups, Notification, Message, Comments, Posts, Stories, NewsFeed } from './components'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Home.css'

function Comments() {
    // let navigate = useNavigate();

  const values = [true];

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

    return (
        <>
        {/* {values.map((v, idx) => (
          <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
            Full screen
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
          </Button>
        ))}

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal> */}
      </>
    )
}

export default Comments


