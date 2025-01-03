import React from 'react'
import './Navcard.css';

function Navcard({image,name,price}) {
  return (
    <div className='ncard'>
      <img src={image} alt='not'/>
      <p>{price}</p>
      <p>{name}</p>
    </div>
  )
}
export default Navcard;
