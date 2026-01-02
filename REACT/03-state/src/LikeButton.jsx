import React from 'react'
import { useState } from 'react'

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  }

  return (
    <div>
        <p onClick={toggleLike}>
        {isLiked ? (<i className="fa-solid fa-heart" style={{color: "red"}}></i>) 
        :(<i class="fa-regular fa-heart"></i> ) }
        
        </p>
        
    </div>
  )
}

export default LikeButton