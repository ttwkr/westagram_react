import React from 'react'

function UnderFeed(){
    return (
      <div className="underFeedImg">
        <div className="underFeedImgThreeDot">
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
        <div className="feedIcons">
          <div>
            <img className="feedIconsImg" alt='feedIconsImg' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
            <img className="feedIconsImg" alt='feedIconsImg' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
            <img className="feedIconsImg" alt='feedIconsImg' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
          </div>
          <div>
            <img className="feedIconsImg" alt='feedIconsImg' src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
          </div>
        </div>
      </div>
    )
}

export default UnderFeed