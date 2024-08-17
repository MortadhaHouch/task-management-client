"use client"
import React, { useContext } from 'react'
import { CookiesProvider } from 'react-cookie'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import LoginContextProvider from '../../providers/LoginContextProvider'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
export default function HomeLayout({children}:any) {
    return (
        <body className={`w-screen h-screen`}>
            <NextThemesProvider>
                <CookiesProvider>
                    <LoginContextProvider>
                        <Header/>
                        {children}
                        <Footer/>
                    </LoginContextProvider>
                </CookiesProvider>
            </NextThemesProvider>
        </body>
    )
}
