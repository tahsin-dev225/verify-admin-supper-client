"use client"
import { userContext } from "@/component/UserProvider";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const page = () => {
    const route = useRouter();
    const [currentUser, setCurrentUser] = useContext(userContext)

    const handleLogin = async (e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.password.value;
        const user ={
            email,
            password
        }

        axios.post(`http://localhost:5000/currentUser`,user, {withCredentials:true})
        .then(res =>{
            console.log(res.data)
            if(res?.data?.insertedId === null){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${res?.data?.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                return 
            }
            setCurrentUser(res.data)
            route.push('/')
        }).catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <h1 className="mx-auto my-6 text-5xl text-center">Login</h1>
            <form onSubmit={handleLogin} className="px-7 py-3 w-[40%] mx-auto">
                <p className="my-2">Email</p>
                <input name="email" className="py-2 text-slate-900 w-full rounded-md px-4 bg-slate-200 " type="text" placeholder="Email"  />
                <p className="my-2">Password</p>
                <input name="password" className="py-2 w-full text-slate-900 rounded-md px-4 bg-slate-200 " type="text" placeholder="Password"  />

                <input className="w-full py-1 px-3 my-9 rounded cursor-pointer bg-teal-500" type="submit" value="Login" />
                <p className="my-5 mx-auto">Don't have account <Link className="text-blue-500" href="/signup"> Sign up</Link></p>
            </form>
        </div>
    );
};

export default page;