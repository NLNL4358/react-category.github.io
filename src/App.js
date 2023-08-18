import './css/App.css';
import './css/reset.css';
/* 
  주제 : 컴퓨존
  카테고리 : 데스크탑 / 노트북 / 컴퓨터부품
  GNB : 파격할인, 추천상품 , HOT이벤트, APPLE, 온라인 견적, 중고, 리퍼비시
  만들어야 할 페이지 : 메인 페이지(모든제품, 헤더,푸터, 라우터 사용), 로그인 페이지(ID,PassWord),  Shop 페이지(카테고리중 하나만 보이게끔 하는 페이지)
*/

import {useState} from 'react';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './component/Header.js';
import Shop from './component/Shop.js'
import Login from './component/Login.js'
import Main from './component/Main.js'


import productList from "./component/ProductList"

const data = productList;



function App() {
  return (
    <div className="App">
      <Header></Header>    
      <Routes>
        <Route path='/' element={<Main data={data}></Main>}></Route>

        {/* path에 `/Shop` 이 아닌!! /Shop/:id  해줘야 뒤에 id가 붙어서 들어와도 인식가능! 
          카테고리와, ID를 전달해줄것 이기 때문에 ` /Shop/:category/:id ` 를 path로 하였다
          : << 를 빼먹지않게 주의
        */}
        <Route path='/Shop/:category/:id' element={<Shop data={data}></Shop>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>  
      
    </div>
  );
}

export default App;
