import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import validator from 'validator'


 const GlobalState = createContext();

export const GlobalStateProvider = ({children})=>{
    const [emailError, setEmailError] = useState('')
    const [input, setInput] = useState('');
    const [inputComm, setInputComm] = useState('');
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [showSubmit, setShowSubmit] = useState(false)
    const [postComms, setPostComms] =  useState([]);


    

    const validateEmail = (e) => {
        let email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('')
          setInput(e.target.value);
          setShowSubmit(true)
        } else {
          setEmailError('Enter valid Email!')
        }
      }

      const handleClick =(e)=>{
          const vals = e;
        setPost(vals);
      }

      const handleComms = (e)=>{
        setInputComm(e.target.value)
        console.log(inputComm);
      }

      const addComms =(inputVal)=>{
        setPostComms(inputVal)
      }

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            const postResult = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setUsers(result.data);
            setPosts(postResult.data);
        };

        fetchUsers()

    }, [])
    
    

    const state ={
     
        validateEmail,
        input, setInput,
        post,
        handleComms,
        handleClick,
        users, setUsers,
        posts, setPosts,
        emailError, setEmailError,
        showSubmit, setShowSubmit

    }
   

    return (
        <GlobalState.Provider value={state}>
            {children   }
        </GlobalState.Provider>
    )
};


export default GlobalState;