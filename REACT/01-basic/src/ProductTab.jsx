import React from 'react'
import Product from './Product'

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    let options2 = { a: "costly", b: "slim", c: "light"};
  return (
    <>
    <Product title="phone" price={30000} features= {options} features2= {options2} features3= {{a: "hitech"}} />
    <Product title="laptop" price={50000} />
    <Product title="pen" />
    </>
  )
}

export default ProductTab;