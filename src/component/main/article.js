import React from 'react'
import FeedImg from './feedImg'
import UnderFeed from './underFeed'
import FeedBottom from './feedBottom'
import FeedHeader from './feedHeader'
import ViewReple from './viewReple'
import WriteReple from './writeReple'

function Article({id, addComments, headerTitle, headerImg, feedImg, comments, write}){
    return (
        <div className="mainFeed">
          <article id = {id}>
            <FeedHeader headerTitle = {headerTitle} headerImg = {headerImg}/>
            <FeedImg feedImg = {feedImg}/>
            <UnderFeed/>
            <FeedBottom user_id = 'ttwkr' number = '10'/>
            <ViewReple comments = {comments} write = {write} addComments = {addComments}/>
            {/* <WriteReple write = {write} addComments = {addComments}/> */}
          </article>
        </div>
    )
  }

export default Article