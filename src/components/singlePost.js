
import { useContext } from "react";
import GlobalState from '../contexts/globalState'

function SinglePost() {
 
    const {post} = useContext(GlobalState)

 
  return (
    <div className="post">
       
        <h2>{post.id}</h2>
        <h2>{post.title}</h2>
        <h2>{post.body}</h2>
        <pre>
        <h2>add comments</h2>
        <span>comments: </span><input type="text" id="userEmail" 
       ></input> <br />
    
      </pre>
    </div>
  );
}

export default SinglePost;