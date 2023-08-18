import React from 'react'

import { useLocation, Link } from 'react-router-dom';


function Shop(props) {

  let url = useLocation().pathname; /* 현재 주소를 반환 */
  /* replace 함수로 문자열 앞의 /Shop/ 을 제거 */
  let category_and_id = url.replace("/Shop/", ""); /* 카테고리/id 의 형태로 남음 */

  /* split 함수로 '/' 를 기준으로 문자열 나누기 */
  let url_array = category_and_id.split('/'); /* url_array에는 [카테고리], [id] 가 들어있음 */
  console.log(`카테고리 : ${url_array[0]} , ID : ${url_array[1]}`)
  
  /* 타겟을 특정하기위함 */
  let target_category = url_array[0];
  let target_id = url_array[1];



   /* 타겟 */
  let target = props.data[target_id];
  console.log(target); 


  /* 필터링 - 같은 카테고리 상품만 filter를 통해 고름*/
  /* 필터를 쓸떈 반환이 필요하니 무조건 (item)=> ()  소괄호를 사용!! */
  let categoryList = props.data.filter((item)=>(
    item.category == target_category
  ))
  console.log(categoryList);

  return (
    <div className='Shop' key={props.data.id}>
      <div className="target_wrap">
        <div className="target_image_wrap">
          {
            /* target에 ? 를 붙히는 이유는?  '?' 옵셔널 체이닝이라는 이름으로 프로퍼티가 존재할때 사용해라 라는 의미!  이 target을 불러오기전에 이 DOM을 만들려해서 오류가 발생하고있으니 이렇게 해야 오류를 사전에 막을 수 있음 */
            <img src={`${props.data[target_id].img}`} alt="" className='target_image'/>

          }
        </div>
        <div className="target_text_wrap">
          <h2>{target?.title}</h2>
          <h3>{target?.price}</h3>
        </div>
      </div>

      <div className="category_list_wrap">
        <h3> 비슷한 상품들 : </h3>
        <ul className='category_list_ul'>
          {
            categoryList.map((item, index)=>{
              return(
                <Link className='productWrap shop' to={`/Shop/${item.category}/${item.id}`} key={item.id}>
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
    </div>
  )
}

export default Shop