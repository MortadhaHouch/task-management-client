"use client"
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeContextProvider";
import Tab from "../../components/main/Tab";

export default function Login() {
    const themeContext = useContext(ThemeContext)
    return (
        <main 
            className="w-full min-h-[150vh] flex flex-col justify-center items-center"
            style={{
                backgroundColor:themeContext.isDark?"#1F316F":"#EEEEEE",
            }}
            ><Tab theme={themeContext}/>
        </main>
    )
}
