import React from 'react'
import RightMenuImg from './rigntMenuImg'

function RightMenu(){
        return (
            <div className="rightMenu">
                <RightMenuImg imgsrc = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'/>
                <RightMenuImg imgsrc = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'/>
                <RightMenuImg imgsrc = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'/>
            </div>
        )
    }


export default RightMenu