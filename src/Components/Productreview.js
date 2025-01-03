import React from 'react';
import './Productreview.css';
import Productcard from './Productcard';
function Productreview({reviews}) {
  return (
    <div className='preview'>
        {
            reviews.map((item)=>(
                <Productcard image={item.image} review={item.review} name={item.name} price={item.price} />
            ))
        }
      
    </div>
  )
}

export default Productreview;
