import React from 'react'
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider=({start})=>{
  return (
    <div style={{ display:'block'}}>
    <Carousel interval={1000}>
        { start.map((item)=>(
          <Carousel.Item>
           <img
          className="d-block w-100"
          src={item}
          alt="Image One"
          style={{display:'inline'}}
        />
        </Carousel.Item>
         ))
        }
   </Carousel>
   </div>
  )
}
export default Slider;
