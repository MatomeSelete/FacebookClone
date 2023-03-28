import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavBar, Friends, Shorts, Groups, Notification, Message,  Posts, Stories, NewsFeed } from './components'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




import './Home.css'



function Home() {
  // let navigate = useNavigate();

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
      {/* <Comments /> */}
          <Posts />
          <Stories />
          <NewsFeed />
      </div>
    </>

  )
};

export default Home
