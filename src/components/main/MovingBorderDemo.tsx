"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorderDemo({children}:{
    children:React.ReactNode
}) {
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                {children}
            </Button>
        </div>
    );
}
