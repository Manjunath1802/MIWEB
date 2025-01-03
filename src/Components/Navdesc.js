import React from 'react'
import './Navdesc.css';
import Navcard from './Navacard';
import { useState,useEffect } from 'react';

function Navdesc({miphone,redmi,tv,hom,laptop,access,aud,fl}) {
    const [mipntoggle,setmipntoggle]=useState(false);

  useEffect(()=>{
   if(window.location.pathname==='miphones'){
   return setmipntoggle(true);
   }
   
  },[])

  return (
    <div className='navde'>
      {
       mipntoggle&&miphone.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        redmi.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        laptop.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        tv.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        aud.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        hom.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        access.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
      {
        fl.map((item)=>{
            <div className='card'>
            console.log({item.price});
            <Navcard image={item.image} name={item.name} price={item.price}/>
            </div> 
        })
      }
    </div>
  )
}

export default Navdesc;
