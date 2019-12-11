import React, {Component} from 'react'
import RightMenuImg from './rigntMenuImg'

class RightMenu extends Component{
    state = {
        img_address:[
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
        ]
    }

    render(){
        return (
            <div className="rightMenu">
              {this.state.img_address.map( (curr, i) => {
                 return( <RightMenuImg key={i} imgsrc = {curr}/> )
              })}
            </div>
        )
    }
}

export default RightMenu