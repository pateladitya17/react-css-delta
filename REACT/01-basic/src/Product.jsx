import React from 'react';
import "./Product.css";

function Product({title, price = 1, features, features2, features3}) {
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ? "yellow" : ""};
  return (
    <div className='Product' style={styles}>
        <h3> {title}</h3>
        <h5>price: {price}</h5>
        {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
        {/* <p>{features2.b}</p>
        <p>{features3.a}</p> */}
        {isDiscount  ? <p> discount of 15%</p> : null}
        {price > 20000 &&  <p>"discount of 5%</p> }

    </div>
  )
}

export default Product;