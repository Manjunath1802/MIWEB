import React from 'react';
import './Productcard.css';

function Productcard({image,name,review,price}) {
  return (
    <div className='pcard'>
      <img src={image} alt='notfound'/>
      <p>{name}<span>{price}</span></p>
      <p>{review}</p>
    </div>
  )
}

export default Productcard;
