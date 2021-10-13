import React from 'react'
import './Section3.scss'
import ProductItem from './ProductItem'
import count1 from 'assets/section3/producticon-01.webp'
import bestimage01 from 'assets/section3/best-image-01.jpg'
import count2 from 'assets/section3/producticon-02.webp'
import bestimage02 from 'assets/section3/best-image-02.jpg'
import count3 from 'assets/section3/producticon-03.webp'
import bestimage03 from 'assets/section3/best-image-03.jpg'

const Section3 = () => {
  return (
    <div className="section3">
      {/* <img src="" alt="" /> */}
      <div className="st3-main">
        <div className="st3-content">
          <span className="st3-title">best product</span>
          <span className="st3-content-main">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </span>
        </div>
        <div className="product-list">
          <ProductItem count={count1} productImage={bestimage01} />
          <ProductItem count={count2} productImage={bestimage02} />
          <ProductItem count={count3} productImage={bestimage03} />
        </div>
      </div>
    </div>
  )
}

export default Section3
