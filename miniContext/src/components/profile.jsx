import React, {useContext} from "react";  
import UserContext from "../context/userContext";

export default function Profile(){

    //UseContext hook to consume UserContext (takes Context as an argument)
    // it allows us to access the context values provided by that Context
    // Accessing >>user value from >>UserContext component here.
    const {user} = useContext(UserContext);
    return (
        <div>
            <h2> {user ? "Hello " + user + "!" : "Please Login"}</h2>
            
        </div>
    )   
}