"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { LoginContextProvider } from '../../providers/LoginContextProvider'
import { CookiesProvider } from 'react-cookie'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import {AnimatePresence,motion} from "framer-motion"
export default function HomeLayout({children}:any) {
    let [isVisible,setIsVisible] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsVisible(false)
        },2000)
    },[])
    return (
        <AnimatePresence
            mode="wait"
            >
            <body className={"w-screen h-screen"}>
                <ThemeProvider 
                    attribute="class"
                    defaultTheme="system"
                    enableSystem>
                    <CookiesProvider>
                        <LoginContextProvider>
                                    {isVisible && (
                                        <div>
                                            <motion.div
                                                key="modal"
                                                initial={{ width: "100vw",height:"calc(100vh / 3)",backgroundColor:"rgb(3,36,66)",position: "fixed",top:0,left:"auto",right:"auto",zIndex:100000}}
                                                animate={{ x:"100%"  }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    duration:2,
                                                    bounce:.5,
                                                }}
                                            />
                                            <motion.div
                                                key="modal"
                                                initial={{ width: "100vw",height:"calc(100vh / 3)",backgroundColor:"rgb(3,36,66)",position: "fixed",top:"calc(100vh / 3)",left:"auto",right:"auto",zIndex:100000}}
                                                animate={{ x:"-100%" }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    duration:2,
                                                    bounce:.5
                                                }}
                                            />
                                            <motion.div
                                                key="modal"
                                                initial={{ width: "100vw",height:"calc(100vh / 3)",backgroundColor:"rgb(3,36,66)",position: "fixed",top:"calc(2 * 100vh / 3)",left:"auto",right:"auto",zIndex:100000}}
                                                animate={{ x:"100%" }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    duration:2,
                                                    bounce:.5
                                                }}
                                            />
                                        </div>
                                    )}
                                    <Header/>
                                    {children}
                                    <Footer/>
                        </LoginContextProvider>
                    </CookiesProvider>
                </ThemeProvider>
            </body>
        </AnimatePresence>
    )
}
