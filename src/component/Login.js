import React from 'react'

function Login() {
  return (
    <div className='Login'>
      <input type="text" id="id" placeholder='아이디를 입력해주세요' className='loginInput'/>
      <input type="PassWord" id="passWord" placeholder='패스워드를 입력해주세요' className='passWordInput'/>

      <div className="button_wrap">
        <button className='login_button'> 로그인 </button>
        <button className='cancel_button'>취소</button>
      </div>
    </div>
  )
}

export default Login