import React from 'react'
function printHello () {
    console.log("hello");
}
function Button() {
  return (
    <>
      <button onClick={printHello}>
        Click Me
      </button>
      <p onMouseOver={printHello}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates sequi molestias porro? Consectetur rerum autem vitae odit, aut voluptates.</p>
    </>
  )
}

export default Button