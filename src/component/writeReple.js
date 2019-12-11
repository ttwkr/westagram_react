import React from 'react'

function WriteReple(){
    return(
        <div className="writeReple">
            <form>
                <textarea className="writeArea" placeholder="댓글 달기..."></textarea>
                <button className="repleSubmit" id="submitButton" type='submit'>게시</button>
            </form>
        </div>
    )
}

export default WriteReple