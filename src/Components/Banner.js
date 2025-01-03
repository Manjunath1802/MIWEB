import React from 'react'
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

function Banner({end}) {
  return (
    <div className='baner' style={{display:'block'}}>
      <Carousel interval={1500}>
        { end.map((item)=>(
          <Carousel.Item>
           <img
          className="d-block w-100"
          src={item.image}
          alt="Image One"
          style={{display:'inline'}}
        />
         <CarouselCaption>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.source}</p>
        </CarouselCaption>
        </Carousel.Item>
       
         ))
        }
   </Carousel>
    </div>
  )
}

export default Banner;
