"use client";
import { useState } from "react";
import { SignInFlow } from "../auth/types";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

export const AuthScreen = ()=>{

    const [state, setState] = useState<SignInFlow>("signIn");
    return(
        <div className="h-full flex items-center justify-center bg-gradient-to-bl from-black to-[#0d6f8a]">
            <div className="md:h-auto md:w-[500]">
                
                {state==="signIn"?<SignInCard/>:<SignUpCard/>}

            </div>
            
        </div>
    )
}