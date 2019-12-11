import React from 'react'
import Reple from './reple'

function ViewReple(){
    return(
        <div className="viewReple">
            <Reple user_id = 'ttwkr' content='오늘 뭐하니??'/>
            <Reple user_id = 'who__are__you' content = '야 누구야'/>
            <Reple user_id = 'nabi' content = '배고파'/>
        </div>
    )
}

export default ViewReple