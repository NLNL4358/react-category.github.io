import React from 'react'

import {Link} from "react-router-dom";

function Main(props) {
  return (
    <div className='Main inner'>
      <h2 className='main_name'>판매 상품 : </h2>
      <ul className="main_ul">
        {
          props.data.map((item,index)=>{
            return(
              /* !! Shop을 불를때 App.js에서 선언한것 처럼 뒤에 /category/id 가 올 수 있도록! */
              <Link className='productWrap' to={`/Shop/${item.category}/${item.id}`} key={item.id}>
                <li className='main_li' key={item.id}>
                  <div className="productImageWrap">
                    <img className='productImg' src={`${item.img}`} alt="" />
                  </div>
                  <h2 className='productTitle'>
                    {item.title}
                  </h2>
                  <p className='productPrice'>
                    {item.price} 원
                  </p>

                  <div className="detail">
                    <span> Click하여 자세히보기 </span>
                  </div>
                </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Main