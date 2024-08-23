import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SetStateAction, useEffect, useRef, useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,CarouselApi } from "./carousel";
import DropdownMenuDemo from "../main/DropDown"
import ContextMenuComponent from "../main/ContextMenu";
export const HoverEffect = ({
    className,
}: {
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    let {theme} = useTheme();
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
      if (!api) {
        return
      }
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
    let items = []
    return (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
            className
          )}
        >
          <Carousel setApi={setApi} className="w-[80vw] h-[100vh] flex flex-row justify-center items-center relative">
            <CarouselContent className="flex flex-row justify-center items-center gap-2">
            {items.map((item, idx) => (
            <AnimatePresence key={idx}>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-300/[0.8] block -z-10 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
            <CarouselItem key={idx} className="lg:basis-1/3 md:basis-1/3 sm:basis-2/3">
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
              </CarouselItem>
            </AnimatePresence>
          ))}
        </CarouselContent>
        <div 
          style={{
            backgroundColor:"rgba(255,255,255,0.25)",
            backdropFilter:"blur(10px)"
          }}
          className="w-[clamp(300px,50vw,1000px)] height-[30px] absolute bottom-[25%] left-auto right-auto">
          <CarouselNext/>
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};