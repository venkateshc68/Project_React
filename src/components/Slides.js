import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import gard from '../images/gard.jpg'
//import lawn1 from '../images/lawn1.jpg'

export default function Slides() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className= "abc" style={{height:"400px",width:"100%",marginLeft:"10px",marginRight:"30px"}}
      src={gard}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{fontFamily:"verdana"}}>Landscaping Services</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className= "abc" style={{height:"400px",width:"100%",marginLeft:"10px",marginRight:"30px"}}
      src={gard}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Lawn maintanance</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className= "abc" style={{height:"400px",width:"100%",marginLeft:"10px",marginRight:"30px"}}
      src={gard}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tree and shrub</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
