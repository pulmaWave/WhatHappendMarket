import React from 'react'
import MainBanner1 from "assets/section1/main-banner.png"
import "./Section1.scss"

const Section1 = () => {
  return (
    <div className="section1 img-bg" style={{display: "flex"}}>
      <img src={MainBanner1} alt="banner1" className="img-bg"/>
    </div>
  )
}

export default Section1
