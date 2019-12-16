import React from 'react'
import Reple from './reple'

function ViewReple({comments, write, addComments}){
    return (
        <div>
            <div className="viewReple">
                {comments.map( (curr) => {
                    return <Reple 
                            key = {curr.comment_num} 
                            user_id = {curr.user_id} 
                            comment = {curr.comment}
                            />
                })}
            </div>
            <div className="writeReple">
                <form>
                    <textarea className="writeArea" placeholder="댓글 달기..." onChange = {write}/>
                    <button 
                        className="repleSubmit" 
                        id="submitButton" 
                        type='submit' 
                        onClick = {addComments}
                        >게시</button>
                </form>
            </div>
        </div>
    )
}

export default ViewReple