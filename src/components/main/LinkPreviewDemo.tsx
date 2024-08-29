"use client";
import React from "react";
import { LinkPreview } from "../ui/link-preview";

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
        <LinkPreview isStatic={false} url={href} className="font-bold">
          {title}
        </LinkPreview>
      </p>
    </div>
  );
}
