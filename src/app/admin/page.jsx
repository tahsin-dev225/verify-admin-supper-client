"use client"
import PrivateLayout from "@/component/PrivateLayout";
import { userContext } from "@/component/UserProvider";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";


const page = () => {
    const router = useRouter()
    // const [myLoading, setMyLoading] = useState(true)
    // const [currentUser, setCurrentUser] = useContext(userContext)
    // console.log('from admin', currentUser)

    const todos = useSelector(state => state?.todos[0])

    console.log('from admin', todos?.role)

    
    
    // if(currentUser?.role === 'admin' || currentUser?.role === 'supper-admin'){
        if(todos?.role === 'admin' || todos?.role === 'supper-admin'){
            return (
                    <div className="flex flex-col h-screen justify-center items-center gap-6">
                        <h1 className="mx-auto my-12 text-5xl text-center">Admin Page</h1>
                        <h1 className="text-2xl text-red-300">{currentUser?.email}</h1>
                        <h1 className="text-5xl">{currentUser?.role}</h1>
                        <h1 className="text-2xl">{currentUser?.name}</h1>
                    </div>
            );
        }
    // }

    return router.push('/login')
    
};

export default page;