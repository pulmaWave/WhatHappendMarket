import React from 'react'
import './Brand.scss'

const Brand = (props) => {
  const { title, image, width, bgrColor } = props

  return (
    <div className="brand">
      <div
        className="brand-header"
        style={({ color: { bgrColor } }, { width: { width } })}
      >
        <p className="title">{title}</p>
      </div>
      <div className="brand-image">
        <img src={image} alt="brand's name" />
      </div>
    </div>
  )
}

export default Brand
