"use client"
import { userContext } from "@/component/UserProvider";
import { useRouter } from "next/navigation";
import { useContext} from "react";

const page = () => {
    const [currentUser, setCurrentUser] = useContext(userContext)
    const router = useRouter()

    if(currentUser?.role){
        return (
            <div className="flex flex-col h-screen justify-center items-center gap-6">
                <h1 className="mx-auto my-12 text-5xl text-center">User Page</h1>

                <h1 className="text-2xl text-red-300">{currentUser?.email}</h1>
                <h1 className="text-2xl">{currentUser?.role}</h1>
                <h1 className="text-2xl">{currentUser?.name}</h1>
            </div>
        )
    }
    return router.push('/login')
};

export default page;