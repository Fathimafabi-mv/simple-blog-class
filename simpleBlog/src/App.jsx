import React, { Component } from 'react'
import "./App.css"

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
     newtitle:"",
     newcontent:"",
     posts:[
      {id:1,title:"Gratitude",content:" Should always thankful to the blessings of life!"},
      {id:2,title:"Trust",content:"Trust the timing of life!"},
          ]

    };
  }
  handleInputchange=(e)=>{
    this.setState({newtitle:e.target.value})
  }

handleInputcontent=(e)=>{
  this.setState({newcontent:e.target.value})
}

handleClick=()=>{
 const {posts,newcontent,newtitle}=this.state;
if(newtitle && newcontent){
const newpost={
id:posts.length+1,
title:newtitle,
 content:newcontent,
 }
 this.setState({
     posts:[...posts,newpost],
       newtitle:"",
    newcontent:"",
   })
   }

 }



  render() {
    return (
      <div className='main'>     
      <h1 className='heading' >Welcome to My Blog..</h1>
        <h2 className='sub-heading'>Add A New post</h2>
        
        <div className='container'>
   
        <input className='input-title'
         type="text"
         value={this.newtitle}
         placeholder='add a title'
         onChange={this.handleInputchange}
         />
         <textarea
         className='input-content'
         type="text"
         value={this.newcontent}
         placeholder='add a content'
         onChange={this.handleInputcontent}

         />
         <button onClick={this.handleClick}
         className='input-btn'>Add post</button>
         </div>


         <div className='post-box'>
            <h2 className='postss'>All Posts</h2>
            {
              this.state.posts.map((value)=>(
                <div>
                <h3 className='post_title '>{value.title}</h3>
                <p >{value.content}</p>
                </div>
              ))
            }
         </div>
        
      </div>
    )
  }
}

export default App
