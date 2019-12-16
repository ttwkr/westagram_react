import React, {Component} from 'react'
import Article from './article'
import MainRight from './mainRight'


class Main extends Component{
  state = {
      article : [
        {
          id :0,
          headerTitle : '위코드',
          headerImg : 'https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
          feedImg : 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408_960_720.jpg',
          comments :  [
            {
              comment_num : 1,
              user_id : 'ttwkr',
              comment : '오늘 뭐하니??'
            },
            {
              comment_num : 2,
              user_id : 'who__are__you',
              comment : '야 누구야'
            },
            {
              comment_num : 3,
              user_id : 'nabi',
              comment : '오늘 배고파??'
            }
          ]
        },
        {
          id :1,
          headerTitle : 'nabi',
          headerImg : 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
          feedImg : 'https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189__340.jpg',
          comments :  [
            {
              comment_num : 1,
              user_id : 'ttwkr',
              comment : '저손 뭐임?'
            },
            {
              comment_num : 2,
              user_id : 'who__are__you',
              comment : '넌 뭐야'
            },
            {
              comment_num : 3,
              user_id : 'nabi',
              comment : '배고프다'
            }
          ]
        }
      ],
      write : ''
    }
  
  inputWrite = (event) => {
    this.setState({
      write : event.target.value  

    })
  }

  render(){
    return (
      <main id="mainContent">
        <div className="content">
          <div className = 'content__div'>
            {this.state.article.map( (curr) => {
              return  <Article
                        addComment={ curr.addComments}
                        key = {curr.id}
                        // id = {i}
                        headerTitle = {curr.headerTitle}
                        headerImg = {curr.headerImg}
                        feedImg = {curr.feedImg}
                        comments = {curr.comments}
                        write = {curr.inputWrite}
                        />
            })}
          </div>
          <MainRight/>
        </div>
      </main>
    )
  }
}

export default Main