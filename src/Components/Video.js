import React from 'react'
import './Video.css';
import Videocard from './Videocard';

function Video({videos}) {
  return (
    <div className='video'>
      {
        videos.map((item)=>(
            <Videocard name={item.name} image={item.image}/>
        ))
      }
    </div>
  )
}

export default Video;
