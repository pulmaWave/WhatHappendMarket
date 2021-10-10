import React from 'react'
import './Product2.scss'
import heart from "assets/section4/heart.svg"

const Product2 = (props) => {
  const {
    image,
    productImage2,
    productImage3,
    productName,
    prd2Price,
    likeCount
  } = props

  return (
    <div className="product2">
      <img
        src={image}
        alt="product see more"
        srcSet={`${image} 300w, ${productImage2} 768w, ${productImage3} 1280w`}
        className="prd2-img"
      />
      <div className="prd2-footer">
        <span className="prd2-name">{productName}</span>
        <div className="inner">
          <span className="prd2-price">{prd2Price}</span>
          <span className="prd2-like"><img src={heart} alt="like heart" className="heart-svg"/>{likeCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Product2
