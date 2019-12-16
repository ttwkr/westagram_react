import React from 'react'
import Reple from './reple'

function ViewReple({comments}){
    return (
        
            <div className="viewReple">
                {comments.map( (curr) => {
                    return <Reple 
                            key = {curr.comment_num} 
                            user_id = {curr.user_id} 
                            comment = {curr.comment}
                        />
                })}
            </div>
    )
}

export default ViewReple