"use client"
import { createContext, useState } from "react";


export const userContext = createContext()

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    return (
        <userContext.Provider value={[currentUser,setCurrentUser]}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;