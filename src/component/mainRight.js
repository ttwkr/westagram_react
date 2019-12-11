import React from 'react'
import MainRightStory from './mainRightStroy'
import MainRightProfileName from './mainRightProfileName'
import Recommend from './recommend'

function MainRight(){
    return(
        <div className="mainRight fix">
            <div className="mainRightProfile">
                <div>
                    <img className="mainRigntProfileImg" alt='mainRigntProfileImg' src="https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"/>
                </div>
                <MainRightProfileName/>
            </div>
                <MainRightStory 
                    title = "스토리"
                    classname="mainRightStroy"
                />
                <Recommend
                    title = "회원님을 위한 추천"
                    classname="mainRightStroy recommend"
                />
        </div>
    )
}

export default MainRight 