import React from "react";
import UserContext from "./userContext";

// The userContextProvider component acts as a context provider for UserContext

const userContextProvider = ({children})=>{

    
    const rahul = null;
    const [user, setUser] = React.useState (null);
    
    return (

        // UserContext.Provider is used to provide context values to its children 
        // Here, we are providing user, setUser, and rahul as context values
        <UserContext.Provider value ={{user, setUser, rahul}}>
            
            {/* Render children components */}
            {children}
        </UserContext.Provider>
    )
}

export default userContextProvider;