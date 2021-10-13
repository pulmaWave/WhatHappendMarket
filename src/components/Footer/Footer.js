import React from 'react'
import './Footer.scss'
import nic from 'assets/footer/snsicon-01.svg'
import fbic from 'assets/footer/snsicon-02.svg'
import blic from 'assets/footer/snsicon-03.svg'

const Footer = () => {
  return (
    <>
      <footer class="footer-pc">
        <div className="info">
          <div className="info-left">
            <p className="if-title">what happened</p>
            <p className="if-content">
              [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 이하
            </p>
            <p className="if-content">
              [공지] 개인 정보 처리 방침 변경 사전 안내 공지
            </p>
            <p className="if-content">
              [공지] 개인 정보 처리 방침 변경 사전 안내 공지 변경 이하
            </p>
            <p className="if-content">
              [공지] 개인 정보 처리 방침 변경 사전 안내 공지 변경
            </p>
            <p className="if-content">
              [공지] 개인 정보 처리 방침 변경 사전 안내 공지 변경 이하
            </p>
          </div>
          <div className="info-right">
            <div className="ifr">
              <p className="if-title">about </p>
              <p className="if-content"> 인 정보 방침</p>
              <p className="if-content"> [공지] 개인</p>
              <p className="if-content"> 개인 정보 처리 방침</p>
            </div>
            <div className="ifr">
              <p className="if-title">my order</p>
              <p className="if-content">처리 방침</p>
              <p className="if-content">보 처리 방침</p>
              <p className="if-content">개인 정보 처리 방침</p>
              <p className="if-content">처리 방침</p>
              <p className="if-content">처리 방침</p>
            </div>
            <div className="ifr">
              <p className="if-title">my account</p>
              <p className="if-content">처리 방침</p>
              <p className="if-content">리 방침</p>
              <p className="if-content">개인 정보 처</p>
              <p className="if-content">방침</p>
            </div>
            <div className="ifr">
              <p className="if-title">my help</p>
              <p className="if-content">1 : 1 상담 내역 </p>
              <p className="if-content">상품 Q & A 내역</p>
              <p className="if-content">공지 사항</p>
              <p className="if-content">는 질문 고고</p>
              <p className="if-content">객의 소리고</p>
            </div>
          </div>
        </div>
        <div className="license">
          <div className="license-title">
            <p className="lct">
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
              <br />
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </div>
          <div className="social">
            <div className="sc-item">
              <img src={nic} alt="n icon" />
            </div>
            <div className="sc-item">
              <img src={fbic} alt="fb icon" />
            </div>
            <div className="sc-item">
              <img src={blic} alt="blog icon" />
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-mb">
        <p className="if-title">what happened</p>
        <div className="social">
          <div className="sc-item">
            <img src={nic} alt="n icon" />
          </div>
          <div className="sc-item">
            <img src={fbic} alt="fb icon" />
          </div>
          <div className="sc-item">
            <img src={blic} alt="blog icon" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
