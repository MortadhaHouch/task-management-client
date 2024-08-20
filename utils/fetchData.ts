import { LoginRequest,SignupRequest, Response } from "./types";
import sign from "jwt-encode"
export default async function fetchData(url:string,method:"GET"|"POST"|"PUT"|"DELETE",body:LoginRequest|SignupRequest|object|null,isLoading:Function){
    let requestBody = null
    switch (method) {
        case "GET":
        case "DELETE":
            requestBody = null
            break;
        case "POST":
        case "PUT":
            requestBody = JSON.stringify({body:sign(body,process.env.NEXT_PUBLIC_SECRET_KEY??"")})
        default:
            break;
    }
    try {
        let request = await fetch(process.env.NEXT_PUBLIC_REQUEST_URL+url,{
            method,
            body:requestBody,
            credentials:"include",
            headers:{
                "Content-Type": "application/json",
                "Set-Cookie": `jwt_token=${document.cookie?.split(';').find((item) => item.trim().startsWith('jwt_token='))?.split('=')[1] ?? ""}`
            }
        })
        let response = await request.json()
        return response
    } catch (error) {
        console.log(error);
    }
}