import { useContext } from "react";
import GlobalState from '../contexts/globalState'


function Users() {
  const {users} = useContext(GlobalState)

  
  return (
    <div className="users">
        <h2>Users</h2>
      {users.length? users.map((user) => {


        return  (<div key={user.id}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              
          </div>)
      }) : <div><h1>Loading...</h1></div>}

      
    </div>
  );
}

export default Users;
