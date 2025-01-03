import React from 'react'
import './Videocard.css';
import { FaPlay } from "react-icons/fa";

function Videocard({name,image}) {
  return (
    <div className='vcard'>
      <img src={image} alt='not'/>
      <FaPlay className='icn'/>
      <p className='txt'>{name}</p>
    </div>
  )
}

export default Videocard;
