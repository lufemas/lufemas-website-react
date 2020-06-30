import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
// import '../css/mainNav.css'

function LastArticleNav(){

  const [articlesList, setArticlesList] = useState();
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currPage,setCurrPage] = useState(1)
  console.log('MainNav')

  useEffect(()=>{

    async function getArticlesList(){

      const {data} = await Axios.get(`https://github-cms-g.herokuapp.com/articles/list/${currPage}/10`)
      // const data = []
      setArticlesList(data)
      console.log('useEffect')

    }

    getArticlesList()
  },[currPage])


  useEffect(()=>{

    async function getTotalArticles(){

      console.log("TOTAL ARTICLES! " )

      const {data} = await Axios.get(`https://github-cms-g.herokuapp.com/articles/total/open`)
      // const data = []
      console.log("TOTAL ARTICLES: " + data)
      setTotalArticles(data.count)
      setTotalPages(Math.ceil(data.count/10))

    }

    console.log('useEffect total')

    getTotalArticles()

  },[])

  
  // console.log(articlesList)
  if(articlesList){
    
    return (
      <nav className="jr col-25 text-center">
          <h2 className="jr mp-0">LastPosts</h2>
          {/* <img className="jr" src={require("../img/lufemas-website-logo.png")} alt="Lufemas Logo"/> */}
          <ul className="jr text-left pl-25 pr-25">
            {articlesList.map( (article,ind) => {return (<li key={ind} className="jr pt-1"><Link to={`/article/${article.number}`} className="link-light-bg" >{article.title}</Link></li>)}    )}
          </ul>
          
          <div className="jr flex-row between">
            <button className="jr button p-05 m0" onClick={()=> setCurrPage(currPage-1)}>Previous</button>
            <p>{currPage} of {totalPages}</p>
            <button className="jr button p-05 m0" onClick={()=> setCurrPage(currPage+1)}>Next</button>
  
          </div>
      </nav>
    )
  }else{
    return <p>Loading...</p>
  }
}

export default LastArticleNav;