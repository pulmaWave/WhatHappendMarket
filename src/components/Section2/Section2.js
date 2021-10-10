import React from 'react'
import "./Section2.scss"
import IntroBg from "assets/section2/introduction-bg.webp"

const Section2 = () => {
  return (
    <div className="section2">
      <img src={IntroBg} alt="introduction background" className="img-bg"/>
      <div className="st2-content">
        <span className="st2-title">What Happened!</span>
        <span className="st2-content-main">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </span>
      </div>
    </div>
  )
}

export default Section2
