"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadDemo({
    setFiles,
    multiple,
    setAvatar
}:{
    setFiles:any,
    multiple:boolean,
    setAvatar:any
}) {
    return (
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={setFiles} multiple={multiple} setAvatar={setAvatar}/>
        </div>
    );
}
