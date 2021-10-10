import React from 'react'
import './Section3.scss'
import ProductItem from './ProductItem'
import BestBg from 'assets/section3/bes-bg.png'
import count1 from 'assets/section3/producticon-01.webp'
import bestimage01 from 'assets/section3/best-image-01.jpg'
import bestimage012x from 'assets/section3/best-image-01@2x.jpg'
import bestimage013x from 'assets/section3/best-image-01@3x.jpg'
import count2 from 'assets/section3/producticon-02.webp'
import bestimage02 from 'assets/section3/best-image-02.jpg'
import bestimage022x from 'assets/section3/best-image-02@2x.jpg'
import bestimage023x from 'assets/section3/best-image-02@3x.jpg'
import count3 from 'assets/section3/producticon-03.webp'
import bestimage03 from 'assets/section3/best-image-03.jpg'
import bestimage032x from 'assets/section3/best-image-03@2x.jpg'
import bestimage033x from 'assets/section3/best-image-03@3x.jpg'

const Section3 = () => {
  return (
    <div className="section3">
      <img src={BestBg} alt="best background" className="img-bg" />
      <div className="st3-main">
        <div className="st3-content">
          <span className="st3-title">best product</span>
          <span className="st3-content-main">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </span>
        </div>
        <div className="product-list">
          <ProductItem
            count={count1}
            productImage={bestimage01}
            productImage2={bestimage012x}
            productImage3={bestimage013x}
          />
          <ProductItem
            count={count2}
            productImage={bestimage02}
            productImage2={bestimage022x}
            productImage3={bestimage023x}
          />
          <ProductItem
            count={count3}
            productImage={bestimage03}
            productImage2={bestimage032x}
            productImage3={bestimage033x}
          />
        </div>
      </div>
    </div>
  )
}

export default Section3
