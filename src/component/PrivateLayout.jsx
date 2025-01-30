"use client"
import { useContext } from "react";
import { userContext } from "./UserProvider";


const PrivateLayout = () => {
    const [currentUser, setCurrentUser] = useContext(userContext)
    // const isAdmin = role.includes("admin")
    // console.log(isAdmin)

    return (
        <div className=""></div>
    );
};

export default PrivateLayout;