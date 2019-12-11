import React from 'react'
import Article from './article'
import MainRight from './mainRight'

function Main(){
    return (
    <main id="mainContent">
      <div className="content">
        <div className = 'content__div'>
          <Article 
            headerTitle = '위코드' 
            headerImg='https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'
            feedImg = 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408_960_720.jpg'
          />
          <Article 
            headerTitle = 'nabi' 
            headerImg = 'https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189__340.jpg'
            feedImg = 'https://image.shutterstock.com/image-photo/british-cat-golden-retriever-260nw-646123102.jpg'
          />
        </div>
        <MainRight/>
      </div>
    </main>
    )
}

export default Main