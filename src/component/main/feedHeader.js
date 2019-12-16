import React from 'react'

function FeedHeader({headerTitle, headerImg}){
    return (
        <div className="feedHeader">
            <div className='header'>
                <div className="headerLeft">
                    <img className="headerImg" alt = 'headerImg'src={headerImg}/>
                    <div>
                        <span className='headerTitle'>{headerTitle}</span>
                    </div>
                </div>
                <img className="headerThreedDot" alt='headerThreeDot' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
            </div>
        </div>
    )
}

export default FeedHeader