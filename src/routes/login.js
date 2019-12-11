import React from 'react'
import logo from './logo_text.png'
import './login.css';

function Login(){
    return(
        <article class="loginArticle">
        <div id="allViewWrap">
          <div class="loginImg">
            <img src={logo} alt = "logo"/>
          </div>
          <div class="formWrap">
            <form>
              <div class="inputWindow">
                <input type="text" id="inputId" placeholder="전화번호"/>
              </div>
              <div class="inputWindow">
                <input type="password" id="inputPassword" placeholder="패스워드"/>
              </div>
              <div class="inputWindow">
                <input type="submit" class="submitIdPw" value="로그인"/>
              </div>
            </form>
          </div>
          <div>
            <span class="forgetPw">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </article>
    )
}

export default Login