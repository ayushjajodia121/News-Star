import axios from 'axios';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "../css/News.css"

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }
  }

   componentDidMount(){
     axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84b91ad79bce4d60bec5abb84dda138e")
    .then((res)=>{
      console.log(res.data.articles);
      this.setState({
        articles:res.data.articles
      })
    })
  }

  render() {
    let cond = "To continue, please click the box below to let us know you're not a robot.";
    return (
      <div>
        <div className="container my-3">
        <h2>Top-HeadLines</h2>
          <div className="row">
            {this.state.articles.map((current,index) =>{
              if(current.content!=cond){
              return <div className="col-md-4" key={index}>
              <NewsItem title={!current.title?"":current.title.slice(0,45)} description={(current.description==null)?"":current.description.slice(0,90)} imageUrl={current.urlToImage} newsUrl={current.url} />
            </div>
              }
              
            } )}

            
            </div>
          </div>
      </div>
    )
  }
}

export default News
