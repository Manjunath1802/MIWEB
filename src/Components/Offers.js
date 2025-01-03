import React from 'react'
import Offer from './Offer';
import './Offers.css';

const Offers=({offer})=>{
  return (
    <div className='Offersec'>
      {
        offer.map((item,index)=>(
          <Offer key={item.image} link={item.url} index={index} src={item.image}/>
        ))
      }
    </div>
  )
}

export default Offers;
