import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { SiAwselasticloadbalancing } from "react-icons/si";
import pdf2html from "pdf2html"
import { useState } from "react";
export default function DropDown({
    className,
    path
}:{
    className:string
    path:string
}) {
    let [isShown,setIsShown] = useState<boolean>(false);
    return (
        <div className={className}>
            <DropdownMenu open={isShown}>
                <DropdownMenuTrigger asChild onClick={()=>setIsShown((prev)=>!prev)}>
                    <Button variant="outline"><BsThreeDotsVertical size={20}/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Template Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <FaCheckCircle 
                            onClick={async()=>{
                                // try {
                                //     let htmlContent = await pdf2html.html(path)
                                // } catch (error) {
                                //     console.log(error);
                                // }
                            }}
                            size={15} 
                            style={{marginRight:10}}/><span>Use this template</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FaDownload
                            size={15} 
                            style={{marginRight:10}}/><span>download as pdf</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FaBookmark 
                            size={15} 
                            style={{marginRight:10}}/><span>Save to your workspace</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <SiAwselasticloadbalancing 
                            size={15} 
                            style={{marginRight:10}}/><span>Load from your workspace</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}