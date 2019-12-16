import React from 'react'

function Reple({user_id, comment}){
    return (
        <div className="reple">
            <div className = "id_content">
                <span className="id" id = {user_id}>{user_id}</span> <span className="repleContent">{comment}</span>
            </div>
            <div>
                <button className="repleSubmit">삭제</button>
            </div>
        </div>
    )
}

export default Reple