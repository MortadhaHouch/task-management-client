"use client"
import React, { useEffect, useRef } from 'react'
import { CookiesProvider } from 'react-cookie'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import LoginContextProvider from '../../providers/LoginContextProvider'
import { ThemeProvider } from '@/components/theme-provider'
import { useTheme } from "next-themes"
import Lenis from 'lenis'
import {motion} from "framer-motion"
export default function HomeLayout({ children }: React.PropsWithChildren) {
    const { theme } = useTheme()
    const lenisRef = useRef()
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Example easing function
            smoothWheel:true,
            autoResize:true,
            gestureOrientation:"both",

        })
        function raf(time:any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.destroy()
        }
    }, [])
    return (
        <div className={`${theme} w-screen h-screen`}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <CookiesProvider>
                    <LoginContextProvider>
                    {
                                !location.href.endsWith("/home") && (
                                    <div style={{position:"fixed",top:0,left:0,zIndex:1000}}>
                                        <motion.div
                                            variants={{
                                                initial:{
                                                    clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                                                },
                                                final:{
                                                    clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)"
                                                }
                                            }}
                                            transition={{
                                                duration:1,
                                                delay:0,
                                                ease:"easeInOut"
                                            }}
                                            initial="initial"
                                            animate="final"
                                            style={{
                                                backgroundColor:`${theme == "light"?"#EBD3F8":"#2E073F"}`,
                                                height:"calc( 100vh / 3)",
                                                width:"100vw",
                                                position:"absolute",
                                                left:0,
                                                top:"calc(0)",
                                            }}
                                        />
                                        <motion.div
                                            variants={{
                                                initial:{
                                                    clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                                                },
                                                final:{
                                                    clipPath:"polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
                                                }
                                            }}
                                            transition={{
                                                duration:1,
                                                delay:0,
                                                ease:"easeInOut"
                                            }}
                                            initial="initial"
                                            animate="final"
                                            style={{
                                                backgroundColor:`${theme == "light"?"#EBD3F8":"#2E073F"}`,
                                                height:"calc( 100vh / 3)",
                                                width:"100vw",
                                                position:"absolute",
                                                left:0,
                                                top:"calc(100vh / 3)",
                                            }}
                                        />
                                        <motion.div
                                            variants={{
                                                initial:{
                                                    clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                                                },
                                                final:{
                                                    clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)"
                                                }
                                            }}
                                            transition={{
                                                duration:1,
                                                delay:0,
                                                ease:"easeInOut"
                                            }}
                                            initial="initial"
                                            animate="final"
                                            style={{
                                                backgroundColor:`${theme == "light"?"#EBD3F8":"#2E073F"}`,
                                                height:"calc( 100vh / 3)",
                                                width:"100vw",
                                                position:"absolute",
                                                left:0,
                                                top:"calc(2 * 100vh / 3)",
                                            }}
                                        />
                                    </div>
                                )
                            }
                        <Header />
                        {children}
                        <Footer />
                    </LoginContextProvider>
                </CookiesProvider>
            </ThemeProvider>
        </div>
    )
}