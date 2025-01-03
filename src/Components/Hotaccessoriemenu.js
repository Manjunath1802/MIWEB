import React from "react";
import './Hotaccessoriemenu.css';
import {Link} from 'react-router-dom';

const Hotaccessoriemenu=()=>{
  return (
    <div className="main">
     <Link className="navlink" to='/music'>MusicStore</Link>
     <Link className="navlink" to='/smartdevice'>SmartDevice</Link>
     <Link className="navlink" to='/Home'>Home</Link>
     <Link className="navlink" to='/lifestyle'>LifeStyle</Link>
     <Link className="navlink" to='/'>MobileAccerories</Link>
    </div>
  )
}
export default Hotaccessoriemenu;
