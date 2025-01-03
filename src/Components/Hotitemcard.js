import React from 'react';
import './Hotitemcard.css';

function Hotitemcard({name,price,image}) {
  return (
    <div className='itemcard'>
       <img src={image} alt="Not found"/>
       <p>{name}</p>
       <span>{price}</span>
    </div>
  )
}

export default Hotitemcard;
