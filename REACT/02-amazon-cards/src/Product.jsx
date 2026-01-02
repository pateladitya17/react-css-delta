import React from 'react';
import "./Product.css";
import Price from './Price';

function Product({title, idx}) {
  let oldPrice = ["123000", "150000", "3000", "4000"];
  let newPrice = ["98900", "123900", "2490", "3290"];
  let description = [["Latest iPhone model", "amazing features"], ["Powerful laptop", "A high-performance"], ["Stylus for iPad", "A precision stylus"], ["Premium smartwatch", " premium features"]];

  return (
    <div className='Product'>
        <h3>{title}</h3>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  )
}

export default Product;