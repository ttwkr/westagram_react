import React from 'react'
import MainRightStoryTitle from './mainRightStoryTitle'
import MainRightStoryRemainder from './mainRightStoryRemainder'

function MainRightStory({classname, title}){
    return(
        <div className={classname}>
            <MainRightStoryTitle title={title}/>
            <MainRightStoryRemainder/>
        </div>
    )
}

export default MainRightStory