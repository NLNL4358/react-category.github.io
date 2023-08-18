import React from 'react'

import {Link} from 'react-router-dom';

import {BsFillPersonFill} from "react-icons/bs"

function Header() {
  return (
    <div className='header'>
      <div className="header_wrap inner">
        <div className="header_top">
          <div className="logo">
            <Link to="/">
              {/* img 경로앞에 '/' 를 붙혀줘야한다!!!!!!!!!!!!!!!!*/}
              <img src="/img/Logo.avif" alt="메인" />
            </Link>
          </div>
          <div className="login_wrap">
            <Link to="/Login">
              <BsFillPersonFill></BsFillPersonFill> Sign-in
            </Link>
          </div>
        </div>
        <div className="header_nav">
          <ul>
            <li>
              <Link to="#">
                파격할인 **
              </Link>
            </li>
            <li>
              <Link to="#">
                추천상품
              </Link>
            </li>
            <li>
              <Link to="#">
                Hot이벤트
              </Link>
            </li>
            <li>
              <Link to="#">
                APPLE
              </Link>
            </li>
            <li>
              <Link to="#">
                온라인 견적
              </Link>
            </li>
            <li>
              <Link to="#">
                중고 * 리퍼비시
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header