import React from 'react'
import './footer.css';
import { LuRefreshCcw } from "react-icons/lu";
import { FaArrowCircleRight } from "react-icons/fa";
import { BsFillXDiamondFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


function footer({fotters}) {
  return (
    <div className='foot'>
        <div className='prefooter'>
        <div className='prefoot'>
         <div className='icon'>
            <LuRefreshCcw/>
         </div>
         <div className='tex'>
           <p>Hassel Free Replacement</p>
           <p>10 days any replacement policy on mobiles</p>
         </div>
      </div>

      <div className='prefoot'>
         <div className='icon'>
            <FaArrowCircleRight/>
         </div>
         <div className='tex'>
           <p>100 percent secure Payments</p>
           <p>We Supports Cards , Wallet and EMIS</p>
         </div>
      </div>

      <div className='prefoot'>
         <div className='icon'>
            <BsFillXDiamondFill/>
         </div>
         <div className='tex'>
           <p >Vist Service Networks</p>
           <p>1000 MI centers across India</p>
         </div>
      </div>

        </div>
      <div className='prefooter'>
      <div className='prefoot'>
         
         <div className='tex'>
           <h3>LET'S STAY IN TOUCH</h3>
           <p>Get updates on sales and special more</p>
         </div>
      </div>

      <div className='prefoot'>
         <div className='tex'>
          <input type='text' placeholder='Enter Email Address'/>
           <p>Thanks, Your on our email list for special offers</p>
         </div>
      </div>

      <div className='prefoot'>
        
         <div className='tex'>
           <h3>FOLLOWS MI</h3>
           <p>we want hear from yourself</p>
         </div>
      </div>
      <div className='icns'>
     
         <FaFacebook/>
         <FaWhatsapp/>
         <FaInstagram/>
         <FaYoutube/>
      </div>
      </div>

<div className='fotter'>

    <div className='support'>
    <h4>Support</h4>
    {
    fotters.support.map((item)=>(
      <p><a href={item.url}>{item.name}</a></p> 
    ))
   }
   </div>
    <div className='shopAndLearn'>
    <h4>ShopAndLearn</h4>
    {
    fotters.shopAndLearn.map((item)=>(
      <p> <a href={item.url}>{item.name}</a></p> 
    ))
}
    </div>
    <div className='retailStore'>
    <h4>RetailStore</h4>
    {
    fotters.retailStore.map((item)=>(
      <p> <a href={item.url}>{item.name}</a></p> 
    ))
}
    </div>

    <div className='aboutUS'>
    <h4>AboutUS</h4>
    {
    fotters.aboutUS.map((item)=>(
      <p> <a href={item.url}>{item.name}</a></p> 
    ))
}

    </div>
    <div className='contactUs'>
    <h4>ContactUs</h4>
    {
    fotters.contactUs.map((item)=>(
      <p> <a href={item.url}>{item.name}</a></p> 
    ))
}
    </div>
</div>
</div> 
  )
}

export default footer;
