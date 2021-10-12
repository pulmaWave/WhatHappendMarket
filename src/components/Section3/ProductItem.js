import React from 'react'
import './ProductItem.scss'
import go_logo from 'assets/section3/go-icon.svg'

const ProductItem = (props) => {
  const { count, productImage, productImage2, productImage3 } = props

  return (
    <div>
      <div className="product-item">
        <img src={count} alt="production 1" className="count-header" />
        <div className="product">
          <img
            src={productImage}
            alt="best product"
            srcSet={`${productImage} 300w, ${productImage2} 768w, ${productImage3} 1280w`}
            class="bestimage01"
          />
        </div>
        <div className="product-footer">
          <span className="prd-footer-content">
            How to create <br /> mobile-optimized
          </span>
          <img src={go_logo} alt="go logo" className="go-logo" />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
