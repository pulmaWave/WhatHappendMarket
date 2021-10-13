import React from 'react'
import "./Section2.scss"
import IntroBg from "assets/section2/introduction-bg.png"

const Section2 = () => {
  return (
    <div className="section2">
      <img src={IntroBg} alt="banner" />
      <div className="st2-content">
        <span className="st2-title">What Happened!</span>
        <p className="st2-content-main">
          How to create mobile-optimized videos in minutes. Not a designer, <br /> every team makes a lot of videos Can be trimmed. Take the first <br/> step to your brand's success. How to create <br/> mobile-optimized videos in
          minutes.
        </p>
        <p className="st2-content-main-mb">
          How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first step to your brand's success. How to create mobile-optimized videos in
          minutes.
        </p>
      </div>
    </div>
  )
}

export default Section2
