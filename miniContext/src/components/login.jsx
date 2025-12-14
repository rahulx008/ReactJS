import React, {useContext } from "react";
import UserContext from "../context/userContext";

export default function Login(){

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    //UseContext hook to consume UserContext (takes Context as an argument)
    // it allows us to access the context values provided by that Context
    // Accessing >>setUser function from >>UserContext component here.
    const {setUser} = useContext(UserContext);

    const handleSubmit = () => {
        setUser(username);
    }

    return (
        <div>
            <h2> Login Component </h2>
            <input type="text" placeholder="Enter Username" 
                value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <br />
            <input type="password" placeholder="Enter Password" 
                value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <button onClick={handleSubmit}> Login </button>
        </div>
    )   
}