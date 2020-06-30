import React , { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import dateFormat from 'dateformat'

import '../css/article.css'



// id        
// title     
// author    
// createdAt 
// bodyHTML  
// labels    
// comments  



function Article(){

  const {number} = useParams()
  console.log(number)

  const [article, setArticle] = useState();
  const [currPage,setCurrPage] = useState(1)

  useEffect(()=>{
    async function getArticle(){

      const {data} = await Axios.get(`https://github-cms-g.herokuapp.com/articles/${number}`)
      setArticle(data)

      console.log(data)

    }

    getArticle()
  },[number])


  if(article){

    return (
      <div >
          <h2 className="jr mt-0">{article.title}</h2>
          <h4 className="jr pb-2">
            <a target="_blank" href={article.author.url} >{article.author.login}</a>
            <data className="jr ml-05"> at { dateFormat( article.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</data>
          </h4>
          
        <div dangerouslySetInnerHTML= { {__html: article.bodyHTML}}></div>
        <ul className="jr flex-row raw-list">
          {article.labels.map((label,ind)=> <li key={ind} style={{backgroundColor: `#${label.color}`}} className="jr ml-1 pl-05 pr-05" >{label.name}</li>)}
        </ul>
        <hr className="jr m-1 mt-2"/>
        <h3>Comments:</h3>

{/* COMMENTS v */}
        <ul className="jr flex-col raw-list">
          {article.comments.map((comment,ind)=> ( 
            <li key={ind} className="jr card p-1 m-05">

            <div className="jr flex-row">

              <div className="jr col-05 mr-1">
                <img className="jr img" src={`https://github.com/${comment.author.login}.png`} alt="Comment Author Avatar"></img>
              </div>
              <h4>
                <a target="_blank" href={comment.author.url} >{comment.author.login}</a>
                <data> at { dateFormat( comment.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</data>
              </h4>

            </div>
              
                <div dangerouslySetInnerHTML= { {__html: comment.bodyHTML}}></div>

            </li> 

            )  )}
        </ul>

{/* POST A COMMENT v */}
      <div className="jr card p-2 m-05">
            <p>PLACE HOLDER FOR: Login with Github and comment form</p>
      </div>

      </div>
    )

  }else{
    return(
      <h2>Loading..</h2>
    )
  }

}

export default Article;