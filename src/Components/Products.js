import React from 'react';
import './Products.css';

const Products=({starproduct})=>{
  return (
    <div className='product'>
      <div>
      <a href={starproduct[0].url}><img src={starproduct[0].image} alt='1stproduct'/></a>
      </div>
       <div>
       <a href={starproduct[1].url}><img src={starproduct[1].image} alt='2ndproduct'/></a>
       <a href={starproduct[2].url}><img src={starproduct[2].image} alt='3rdproduct'/></a>
       <a href={starproduct[3].url}><img src={starproduct[3].image} alt='4thproduct'/></a>
       </div>
    </div>
  )
}
export default Products;
