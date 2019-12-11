import React from 'react'

function FeedBottom({user_id, number}){
    return (
        <div className="feedBottom">
            <img className="likeImg" alt='likeImg' src="https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"/>
            <span><b>{user_id}</b>&nbsp;외&nbsp;<b>{number}명</b>이 좋아합니다.</span>
        </div>
    )
}

export default FeedBottom