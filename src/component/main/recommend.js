import React from 'react'
import MainRightStoryTitle from './mainRightStoryTitle'
import RecommendRemainder from './recommendRemainder'

function Recommend({classname, title}){
    return (
        <div className = {classname}>
            <MainRightStoryTitle title={title}/>
            <RecommendRemainder/>
        </div>
    )
}

export default Recommend