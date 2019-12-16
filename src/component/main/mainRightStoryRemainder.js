import React from 'react'
import MainRightStroyRemainderImgWrap from './mainRightStroyRemainderImgWrap'

function MainRightStoryRemainder(){
    return (
        <div className="mainRightStroyRemainder">
            <MainRightStroyRemainderImgWrap 
                user_id = 'wecode'
                time = '1시간 전'
                src = 'https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'
            />
            <MainRightStroyRemainderImgWrap 
                user_id = 'who__are__you'
                time = '1시간 전'
                src = 'https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'
            />
        </div>
    )
}

export default MainRightStoryRemainder