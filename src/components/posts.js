import { useContext } from "react";
import GlobalState from '../contexts/globalState'
import {
    Link
  } from "react-router-dom";
  

function Posts() {
  const {posts, handleClick} = useContext(GlobalState)

  
  return (
    <div className="posts">
        <h2>Posts</h2>
      {posts.length? posts.map((post) => {
const id = post.id
const title = post.title
const body = post.body


        return  (
        <div key={post.id}>
            <Link to="/singlePost"  onClick={()=>handleClick({id,title, body})}>

              <h4>{post.title}</h4>
</Link>
             
              
          </div>)
      }) : <div><h1>Loading...</h1></div>}

      
    </div>
  );
}

export default Posts;


