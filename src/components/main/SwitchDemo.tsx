import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import fetchData from "../../../utils/fetchData";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export function SwitchDemo({
    text,
    isChecked,
    setIsChecked,
    id
}:{
    text:string,
    isChecked:boolean,
    setIsChecked:React.Dispatch<React.SetStateAction<boolean>>,
    id?:string
}) {
    let [isLoading,setIsLoading] = useState<boolean>(false);
    return (
        <div className="flex items-center space-x-2">
            <Switch 
                id="airplane-mode" 
                checked={isChecked} 
                onCheckedChange={async(val)=>{
                    setIsChecked(!val);
                    try {
                        let request = await fetchData("/task/cancel","PUT",{
                            isCancelled:val,
                            id
                        },setIsLoading);
                        let response = jwtDecode<any>(request.token);
                        console.log(response);
                    } catch (error) {
                        console.log(error);
                    }
                }}/>
            <Label htmlFor="airplane-mode">{text}</Label>
        </div>
    )
}
