import React from 'react'

import './Groups.css'

function Groups() {
  return (
    <div>
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
  )
}

export default Groups