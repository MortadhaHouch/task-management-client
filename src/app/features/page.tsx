import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Image0 from "../../app/assets/images/Capture0.png"
import Image1 from "../../app/assets/images/Capture1.png"
import Image2 from "../../app/assets/images/Capture8.png"
import Image3 from "../../app/assets/images/Capture3.png"
import Image5 from "../../app/assets/images/Capture5.png"
import Image6 from "../../app/assets/images/Capture6.png"
import Image7 from "../../app/assets/icons/12291046_Wavy_Tech-19_Single-12 (1).svg"
import Image8 from "../../app/assets/icons/delete-cancel.svg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BackgroundBeamsWithCollisionDemo } from "@/components/main/BackgroundBeamsWithCollisionDemo";
let images = [
    {
        text:"Unleash the power of task management skills with our excellent services",
        url:[Image0,Image1],
        id:"create"
    },{
        text:"get your tasks well organized",
        url:[Image3,Image2],
        id:"notifications"
    },{
        text:"don't worry about forgetting anything and get notified and up-to-date with your tasks",
        url:Image5,
        id:"unlimited-features"
    },{
        text:"Recover your tasks if they are accidentally deleted",
        url:Image6,
        id:"unlimited-number"
    },{
        text:"Delete your tasks if they are no longer needed",
        url:Image7,
        id:"delete"
    },{
        text:"You can also cancel tasks when they are no longer needed",
        url:Image8,
        id:"recover"
    }]
export default function Features(){
    return(
        <div style={{scrollSnapType:"y mandatory"}}>
            {
                images.map((item,index)=>{
                    return (
                        <ContainerScroll
                            key={index}
                            id={item.id}
                            titleComponent={
                                <>
                                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                                    {item.text}
                                    </h1>
                                </>
                            }
                        >
                            {
                                Array.isArray(item.url)?(
                                    <Carousel 
                                        className="flex flex-row justify-center items-center"
                                        style={{scrollSnapAlign:"start"}}
                                    >
                                        <CarouselContent>
                                            {
                                                item.url.map((url,index)=>(
                                                    <CarouselItem key={index}>
                                                        <Image
                                                            key={index}
                                                            src={url}
                                                            alt="hero"
                                                            height={720}
                                                            width={1400}
                                                            className="mx-auto rounded-2xl object-cover h-full"
                                                            draggable={false}
                                                            objectPosition="center"
                                                        />
                                                    </CarouselItem>
                                                ))
                                            }
                                    </CarouselContent>
                                    <CarouselNext/>
                                    <CarouselPrevious/>
                                </Carousel>
                                )
                                :
                                <Image
                                    src={item.url}
                                    alt="hero"
                                    height={720}
                                    width={1400}
                                    className="mx-auto rounded-2xl object-cover h-full"
                                    draggable={false}
                                    objectPosition="center"
                                />
                            }
                        </ContainerScroll>
                    )
                })
            }
            <BackgroundBeamsWithCollisionDemo/>
        </div>
    )
}