import React from 'react'
import './Section7.scss'
import banner from 'assets/section7/video.png'

const Section7 = () => {
  return (
    <div className="section7">
      <div className="st7-header">
        <p className="st7-title">what happened</p>
        <p className="st7-sub">
          How to create mobile-optimized videos in minutes. Not a designer,
          <br />
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <div className="st7-more">see more</div>
      </div>
      <div className="st7-body">
        <div className="">
          <img src={banner} alt="background" className="img-banner" />
        </div>
      </div>
    </div>
  )
}

export default Section7
