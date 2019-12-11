import React from 'react'

function Reple({user_id, content}){
    return (
        <div className="reple">
            <div className = "id_content">
                <span className="id" id = {user_id}>{user_id}</span> <span className="repleContent">{content}</span>
            </div>
            <div>
                <button className="repleSubmit">삭제</button>
            </div>
        </div>
    )
}

export default Reple