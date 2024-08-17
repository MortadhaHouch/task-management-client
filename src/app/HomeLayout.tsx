"use client"
import React, { useContext } from 'react'
import ThemeContextProvider, { ThemeContext } from '../../providers/ThemeContextProvider'
import { CookiesProvider } from 'react-cookie'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
export default function HomeLayout({children}:any) {
    let theme = useContext(ThemeContext)
    return (
        <body className={`${(theme.isDark && localStorage.getItem("isDark")!==null || JSON.parse(localStorage.getItem("isLoggedIn")??"false"))?"dark":"light"} w-screen h-screen`}>
            <ThemeContextProvider>
                <CookiesProvider>
                    <LoginContextProvider>
                        <Header/>
                        {children}
                        <Footer/>
                    </LoginContextProvider>
                </CookiesProvider>
            </ThemeContextProvider>
        </body>
    )
}
