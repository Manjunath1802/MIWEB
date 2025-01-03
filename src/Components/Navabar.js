import React from 'react'
import './Navabar.css';
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import data from '../data/data.json';
import Navdesc from './Navdesc';

function Navabar({logo}) {
  function Geto(){
    return(
       <Navdesc miphone={data.miPhones}/>
    ) 
  };

  return (
    <div className='nav'>
        <div className='logo1'>
        <img src={logo} className='logoimg' alt='image'/>
         </div>
         <div className='navlinks'>
         <a className='navlink' href='/miphones'>MI Phones</a>
         <a className='navlink' href='/Redmi'>Redmi Phones</a>
         <Link className='navlink' to="Tv">TV</Link>
         <Link className='navlink' to="Laptop">Laptops</Link>
         <Link className='navlink' to="Fl">Fitness & Lifestyle</Link>
         <Link className='navlink' to="hom">Home</Link>
         <Link className='navlink' to="Radio">Radio</Link>
         <Link className='navlink' to='acces'>Acessories</Link>
         <div className='searchtxt'>
         <input className='input' type='text' placeholder='search'/>
         <FaSearch  className='icon'/>
         </div>
        </div>
    </div>
  )
}
export default Navabar
