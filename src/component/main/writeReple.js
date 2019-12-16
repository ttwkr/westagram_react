import React from 'react'
import './main'

function WriteReple({write, addComments}){
    return(
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
    )
}

export default WriteReple