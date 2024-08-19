import Lottie from 'lottie-react'
import React from 'react'
import ErrorAnimation from "../../app/assets/animations/Animation - error.json"
import LoadingAnimation from "../../app/assets/animations/Animation - loading.json"
import LoginAnimation from "../../app/assets/animations/Animation - login.json"
export default function Loader({type}:LoadingProps) {
    return (
        <div 
            className='w-[100vw] h-[100vh] fixed top-0 left-0 flex flex-col justify-center items-center' 
            style={{
                zIndex:150,
                backdropFilter:"blur(10px)",
                backgroundColor:"rgba(255,255,255,0.5)",
                transition:".25s"
            }}>
            {
                type == "error" && (
                    <Lottie animationData={ErrorAnimation}/>
                )
            }
            {
                type == "loading" && (
                    <>
                        <Lottie animationData={LoadingAnimation}/>
                    </>

                )
            }
            {
                type == "login" && (
                    <Lottie animationData={LoginAnimation}/>

                )
            }
        </div>
    )
}
type LoadingProps = {
    type:"error"|"loading"|"login"
}