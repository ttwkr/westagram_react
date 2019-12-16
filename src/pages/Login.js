import React,{Component} from 'react'
import logo from '../images/logo_text.png'
import '../styles/login.scss';

class Login extends Component{

  state = {
    id:'',
    password:'',
    isTrue: false
  }

  changeLogin = () =>{
    if((this.state.id.length > 0) && (this.state.password.length > 0)){
      this.setState({isTrue : true})
    }
    else{
      this.setState({isTrue : false})
    }
  }

  changeState = (as) => {
    return (event) => {
      this.changeLogin()
      this.setState({
        [as] : event.target.value
      })
    }
  } 

  render(){
    return(
      <article className="loginArticle">
        <div id="allViewWrap">
          <div className="loginImg">
            <img src={logo}alt = "logo"/>
          </div>
          <div className="formWrap">
            <form>
              <div className="inputWindow">
                <input 
                  type="text" 
                  id="inputId" 
                  placeholder="전화번호"
                  onChange = {
                    this.changeState('id')} 
                  />
              </div>
              <div className="inputWindow">
                <input 
                  type="password" 
                  id="inputPassword" 
                  placeholder="패스워드"
                  onChange = {
                    this.changeState('password')
                  }
                />
              </div>
              <div className="inputWindow">
                <input 
                  type="submit" 
                  className={this.state.isTrue ? "checkLogin" : "submitIdPw" }
                  value="로그인"
                  onClick = { () => {
                    if((this.state.id === '') || (this.state.password === '')){
                      alert('둘중 하나 2글자 이상 입력')
                    }
                  }}
                />
              </div>
            </form>
          </div>
          <div>
            <span className="forgetPw">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </article>
    )
  }
}
export default Login