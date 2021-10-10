import React from 'react'
import './Section6.scss'
// import Brand from './Brand'
import lologo from 'assets/section6/news-object-05.png'
import hotlogo from 'assets/section6/news-object-04.png'
import coin from 'assets/section6/news-object-03.png'
import dice5 from 'assets/section6/news-object-055.png'
import dice3 from 'assets/section6/news-object-02.png'
import brand0 from 'assets/section6/news-img-01.png'
import brand1 from 'assets/section6/women.png'
import brand2 from 'assets/section6/news-img-03.jpg'
import brand3 from 'assets/section6/news-img-04.jpg'
import brand4 from 'assets/section6/news-img-05.jpg'

const Section6 = () => {
  return (
    <div className="section6">
      <div className="dice">
        <div className="dice5">
          <img src={dice5} alt="dice face 5" />
        </div>
        <div className="dice3">
          <img src={dice3} alt="dice face 3" />
        </div>
      </div>
      <div className="st6-header">
        <p className="st6-title">Happened’s issue</p>
        <p className="st6-sub">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 <br /> 다듬을 수 있습니다. 브랜드의 성공을
          위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <div className="st6-more">see more</div>
      </div>
      <div className="st6-body">
        <div className="brand-list">
          <div className="coin">
            <img src={coin} alt="coin2020" />
          </div>
          <div className="hotlogo">
            <img src={hotlogo} alt="coin2020" />
          </div>
          <div className="lologo">
            <img src={lologo} alt="coin2020" />
          </div>
          <div className="brand">
            <div className="brand0">
              <p className="brand0-title">
                whpn <br /> issue
              </p>
              <img src={brand0} alt="brand's name" />
            </div>
          </div>
          <div className="brand">
            <div className="brand-header">
              <p className="title">b brand</p>
            </div>
            <div className="brand-image">
              <img src={brand1} alt="brand's name" />
            </div>
          </div>
          <div className="brand">
            <div className="brand-header">
              <p className="title">c brand</p>
            </div>
            <div className="brand-image">
              <img src={brand2} alt="brand's name" />
            </div>
          </div>
          <div className="brand">
            <div
              className="brand-header"
              style={{ backgroundColor: '#ff5500' }}
            >
              <p className="title">d brand</p>
            </div>
            <div className="brand-image">
              <img src={brand3} alt="brand's name" />
            </div>
          </div>
          <div className="brand">
            <div className="brand-header">
              <p className="title">e brand</p>
            </div>
            <div className="brand-image">
              <img src={brand4} alt="brand's name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
