import React from 'react';
import './Hotaccess.css';
import Hotitemcard from './Hotitemcard';
const Hotaccess=({music,musiccover,smartdevice,smartcover,home,homecover,lifestyle,lifecover,mobile,mobilecover})=>{
  return (
    <div className='hot'>
      <div>
       <img src={musiccover||smartcover||homecover||lifecover||mobilecover} alt='not'/>
      </div>
      <div className='card'>
        {
         music&& music.map((item)=>(
           <Hotitemcard key={item.image} image={item.image} name={item.name} price={item.price} i/>
          ))
        }
        
        {
          smartdevice&&smartdevice.map((item)=>(
            <Hotitemcard key={item.image} image={item.image} name={item.name} price={item.price} i/>
          ))
        }
        
        {
          home&&home.map((item)=>(
            <Hotitemcard key={item.image} image={item.image} name={item.name} price={item.price}/>
          ))

        }
        
        {
          lifestyle&&lifestyle.map((item)=>(
            <Hotitemcard key={item.image} image={item.image} name={item.name} price={item.price} i/>
          ))
        }
        {
          mobile&&mobile.map((item)=>(
            <Hotitemcard key={item.image} image={item.image} name={item.name} price={item.price} i/>
          ))
        }

      </div>
    </div>
  )
}

export default Hotaccess;
