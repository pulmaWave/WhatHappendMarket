import React from 'react'
import './Section5.scss'
import window from 'assets/section5/window.png'
import window2 from 'assets/section5/img.png'

const Section5 = () => {
  return (
    <div className="section5">
      <div className="st5-header">
        <p className="st5-title">brand story</p>
        <p className="st5-sub">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 <br /> 다듬을 수 있습니다. 브랜드의 성공을
          위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <p className="st5-sub-mb">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>
      <div className="st5-body">
        <div className="st5-bd-ct">
          <img src={window} alt="background" className="img-window" />
          <img src={window2} alt="background" className="img-window-mb" />
          <div className="st5-content-more">
            <div className="bg-white">
              <p className="ctmore-title">What Happened’s Brand story</p>
              <p className="ctmore-sub">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </p>
            </div>

            <div className="st5-more">see more</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
