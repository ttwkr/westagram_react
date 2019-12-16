import React from 'react'

function MainRightStroyRemainderImgWrap({user_id, time, tag, src}){
    return(
    <div className="mainRightStroyRemainderImgWrap">
        <div>
            <img className = "mainRightStroyRemainderImg" alt = 'ainRightStroyRemainderImg' src={src}/>
        </div>
        <div className="mainRightStroyRemainderName">
            <div className="mainRightStroyRemainderId">
                {user_id}
            </div>
            <div className="mainRightStroyRemainderTime">
                {time}
            </div>
        </div>
        {tag}
    </div>
    )
}

export default MainRightStroyRemainderImgWrap