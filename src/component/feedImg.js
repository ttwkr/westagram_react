import React from 'react'

function FeedImg({feedImg}){
    return(
        <div>
            <img className = "feedImg" alt='feedImg' src={feedImg}/>
        </div>
    )
}

export default FeedImg