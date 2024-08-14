"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview({
  title,
  description,
}:{
  title:string,
  description:string,
}) {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text={title}
        revealText={title}
        className="sm:text-sm md:text-lg xl:text-xl"
      >
        <TextRevealCardDescription className="sm:text-sm md:text-lg xl:text-xl">
          {description}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
