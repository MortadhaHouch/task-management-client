"use client"
import React, { useContext } from 'react'
import { CookiesProvider } from 'react-cookie'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import LoginContextProvider from '../../providers/LoginContextProvider'
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider } from '@/components/theme-provider'
export default function HomeLayout({children}:any) {
    return (
        <body className={`w-screen h-screen`}>
            <ThemeProvider>
                <CookiesProvider>
                    <LoginContextProvider>
                        <Header/>
                        {children}
                        <Footer/>
                    </LoginContextProvider>
                </CookiesProvider>
            </ThemeProvider>
        </body>
    )
}
