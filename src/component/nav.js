import React, {Component}from 'react';
import logoText from './logo_text.png';
import RightMenu from './rightMenu';

class Nav extends Component{
    render(){
    return (
    <nav id='navBar'>
      <div className="navMenu">
        <div className="topMenu">
          <div className="logo">
            <img className='logoImg' alt = 'logoImg' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
            <div className="middleLine"></div>
            <div className="logoTextDiv">
              <img className="logoText" alt = 'logoText' src={logoText}/>
            </div>
          </div>
          <div className="inputSeach">
            <input type='text' id="inputText" placeholder="검색"/>
          </div>
          <RightMenu/>
        </div>
      </div>
    </nav>
        )
    }
}

export default Nav