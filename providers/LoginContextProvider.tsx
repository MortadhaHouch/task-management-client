"use client"
import React,{ createContext, useState } from "react";

interface LoginContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginContext = createContext<LoginContextType>({
    isLoggedIn:false,
    setIsLoggedIn: () => {}
})
export default function LoginContextProvider({children}:any) {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>
    )
}
export {LoginContext}
