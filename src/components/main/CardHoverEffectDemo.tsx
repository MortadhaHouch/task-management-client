import { SetStateAction } from "react";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";

export function CardHoverEffectDemo({
    items,
    selectedTemplate,
    setSelectedTemplate
}:{
    items:string[],
    selectedTemplate:string,
    setSelectedTemplate:React.Dispatch<SetStateAction<string>>
}) {
    return (
        <div 
            className="max-w-5xl mx-auto p-1 flex flex-row justify-center items-center flex-wrap" style={{columnGap:"10px"}}>
            {
                items.map((item, index) =>(
                    <div key={index} style={{marginTop:"50px"}}>
                        <BackgroundGradientDemo item={item}/>
                    </div>
                ))
            }
        </div>
    );
}