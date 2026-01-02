import React from 'react'
import Product from './Product'

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  }
    
  return (
    <div style={styles}>
      <Product title="i-phone 18 Pro Max" idx={0} />
      <Product title="Apple MacBook Pro" idx={1} />
      <Product title="Apple pen (3rd Gen)" idx={2} />
      <Product title="Apple Watch Ultra" idx={3} />
    </div>
  )
}

export default ProductTab;