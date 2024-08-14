"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "started",
    },
    {
      text: "and",
    },
    {
      text: "go",
    },
    {
      text: "beyond",
    },
    {
      text: "your",
    },
    {
      text: "limits.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 sm:text-sm md:text-lg xl:text-xl">
        The road to success starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <Link href={"/login"}>Login</Link>
        </button>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link href={"/register"}>register</Link>
        </button>
      </div>
    </div>
  );
}
