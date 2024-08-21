import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import { useTheme } from "next-themes";
import { Button } from "./button";
export const HoverEffect = ({
    items,
    className
}: {
    items:string[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    let {theme} = useTheme()
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
        {items.map((item, idx) => (
            <Button
                key={idx}
                className="relative group  block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
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
            {items.map((item, idx) => (
                <AnimatePresence key={idx}>
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
                    {
                        <div 
                            style={{
                                borderRadius:10,
                                margin:"10px",
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                                alignItems:"center",
                                cursor:"pointer",
                                overflow:"hidden",
                            }}>
                            <DocViewer
                                documents={[{uri:item,fileType:"application/pdf"}]}
                                pluginRenderers={DocViewerRenderers}
                                style={{
                                    width:"300px",
                                    height:"500px",
                                    backgroundColor: `${theme=="light"?"#C8ACD6":"#021526"}`,
                                }}
                                theme={{
                                    primary: "#5296d8",
                                    secondary: "#ffffff",
                                    tertiary: "#5296d899",
                                    textPrimary: "#ffffff",
                                    textSecondary: "#5296d8",
                                    textTertiary: "#00000099",
                                    disableThemeScrollbar: false,
                                }}
                            />
                        </div>
                    }
                </AnimatePresence>
            ))}
            </Button>
        ))}
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