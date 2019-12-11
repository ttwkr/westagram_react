import React from 'react'
import FeedImg from './feedImg'
import UnderFeed from './underFeed'
import FeedBottom from './feedBottom'
import FeedHeader from './feedHeader'
import ViewReple from './viewReple'
import WriteReple from './writeReple'

function Article({headerTitle, headerImg, feedImg}){
    return (
        <div className="mainFeed">
          <article>
            <FeedHeader headerTitle = {headerTitle} headerImg = {headerImg}/>
            <FeedImg feedImg = {feedImg}/>
            <UnderFeed/>
            <FeedBottom user_id = 'ttwkr' number = '10'/>
            <ViewReple/>
            <WriteReple/>
          </article>
        </div>
    )
}

export default Article