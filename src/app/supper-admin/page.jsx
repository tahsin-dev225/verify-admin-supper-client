"use client"
import { userContext } from "@/component/UserProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useSelector } from "react-redux";


const page = () => {
    const [currentUser, setCurrentUser] = useContext(userContext)
    const router = useRouter()
    const todos = useSelector(state => state.todos)
    
    if(currentUser?.role !== 'supper-admin'){
        router.push('/login')
        return null
    }
    
    if(currentUser?.role === 'supper-admin'){
        return (
            <div className="flex flex-col h-screen justify-center items-center gap-6">
                <h1 className="mx-auto my-26 text-7xl text-center">Supper Admin Page</h1>

                <h1 className="text-2xl text-red-300">{currentUser?.email}</h1>
                <h1 className="text-6xl">{currentUser?.role}</h1>
                <h1 className="text-2xl">{currentUser?.name}</h1>
            </div>
        );
    }
};

export default page;