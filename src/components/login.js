import { useContext } from "react";
import GlobalState from '../contexts/globalState'
import {
  Link
} from "react-router-dom";


function Login() {
  const {emailError, validateEmail, showSubmit} = useContext(GlobalState)

  return (
    <div className="login">
      
      <div >
      <pre>
        <h2>enter your email</h2>
        <span>Enter Email: </span><input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </pre>
    </div>
     
{showSubmit?<Link to="/home">
<button>Submit</button>
</Link>: <h5>Please enter a valid email</h5>}
     
    </div>
  );
}

export default Login;


  
  
