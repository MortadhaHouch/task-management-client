"use client";
import React from "react";
import { LinkPreview } from "../ui/link-preview";
import { MdOutlineArrowRightAlt } from "react-icons/md";
export function LinkPreviewDemo({
  href,
  title
}:{
  href:string,
  title:string
}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        <LinkPreview isStatic={true} url={href} imageSrc={"/client/src/app/assets/images/Capture0.png"} className="font-bold text-lg flex flex-row justify-between items-center">
          {title} <MdOutlineArrowRightAlt size={20}/>
        </LinkPreview>
      </p>
    </div>
  );
}
