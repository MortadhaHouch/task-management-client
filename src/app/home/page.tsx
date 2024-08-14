import CarouselComponent from "../../components/main/CarouselComponent";
import { CardSpotlightDemo } from "../../components/main/HoverCard";
import { InfiniteMovingCardsDemo } from "../../components/main/InfiniteMovingCardsDemo";
import GoogleGeminiEffectDemo from "../../components/main/PathAnimation";
import SkeletonComponent from "../../components/main/SkeletonComponent";
import { TypewriterEffectSmoothDemo } from "../../components/main/TypewriterEffectSmoothDemo";
import SVG1 from "/src/app/assets/icons/Accept tasks-bro.svg"
import SVG2 from "/src/app/assets/icons/Accept tasks-rafiki.svg"
import SVG3 from "/src/app/assets/icons/Collaboration-amico.svg"
import SVG4 from "/src/app/assets/icons/Customer relationship management-rafiki.svg"
import SVG5 from "/src/app/assets/icons/Time management-amico.svg"
import SVG6 from "/src/app/assets/icons/Office management-pana.svg"
import { Suspense } from "react";
import { GlobeDemo } from "@/components/main/Globe";
export default function Home() {
    return (
        <main className="w-full h-full flex-col justify-start align-top">
            <section className="w-full h-full flex-row justify-center items-center flex-wrap">
                <GlobeDemo/>
            </section>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:15}}>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
                <Suspense fallback={<SkeletonComponent/>}>
                    <CardSpotlightDemo/>
                </Suspense>
            </div>
            <InfiniteMovingCardsDemo/>
            <TypewriterEffectSmoothDemo/>
        </main>
    )
}
