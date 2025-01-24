"use client"
import { userContext } from "@/component/UserProvider";
import { useRouter } from "next/navigation";
import { useContext} from "react";


const page = () => {
    const [currentUser, setCurrentUser] = useContext(userContext)
    const router = useRouter()
    
    
    if(currentUser?.role === 'admin' || currentUser?.role === 'supper-admin' || currentUser?.role === 'seller'){
        return (
            <div className="flex flex-col justify-center h-screen items-center gap-6">
                <h1 className="mx-auto my-12 text-5xl text-center">Seller</h1>

                <h1 className="text-2xl text-red-300">{currentUser?.email}</h1>
                <h1 className="text-3xl">{currentUser?.role}</h1>
                <h1 className="text-2xl">{currentUser?.name}</h1>
            </div>
        );
    }
    
    return router.push('/login')
};

export default page;