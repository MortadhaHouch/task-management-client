"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Feedback } from "../../../utils/types";

export function InfiniteMovingCardsDemo({
  feedbacks,
}:{
  feedbacks:Feedback[]
}) {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        direction="right"
        speed="slow"
        feedbacks={feedbacks}
      />
    </div>
  );
}