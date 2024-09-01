"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { RiImageCircleFill } from "react-icons/ri";
import PlaceHolder from "../../app/assets/images/placeholder-16-9.png";
import fileReading from "../../../utils/fileReading";
import { Task } from "../../../utils/types";
import { useTheme } from "next-themes";
export default function Details({ task }: { task: Task }) {
    const [imageURL, setImageURL] = useState<string>("");
    const [coverURL, setCoverURL] = useState<string>("");
    const coverContainerRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    let {theme} = useTheme()
    return (
        <main className="w-full h-full flex flex-col justify-center items-center">
            <section className=" relative w-full h-[450px] flex flex-col justify-center items-center">
                <div className="relative w-full h-[300px] flex flex-col justify-center items-center">
                    <div
                        ref={coverContainerRef}
                        className="absolute bottom-0 left-[10%] right-[10%] w-[80%] h-[200px] z-10"
                    >
                        <input
                        type="file"
                        style={{
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 10,
                            cursor: "pointer",
                        }}
                        onChange={async (e) => {
                            console.log("Cover input clicked");
                                try {
                                if (e.target.files) {
                                    const url = await fileReading(false, [...e.target.files]);
                                    if (url) {
                                        setCoverURL(url);
                                    }
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                        />
                        {coverURL ? (
                            <Image
                                src={coverURL}
                                alt="Cover image"
                                width={containerRef.current?.getBoundingClientRect().width}
                                height={containerRef.current?.getBoundingClientRect().height}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                    border:`3px solid ${theme == "light"?"rgba(0,0,0,.75)":"rgba(255,255,255,.75)"}`,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 5,
                                }}
                            />
                        ) : (
                            <Image
                                src={PlaceHolder}
                                alt="Cover placeholder"
                                width={containerRef.current?.getBoundingClientRect().width}
                                height={containerRef.current?.getBoundingClientRect().height}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                    border:`3px solid ${theme == "light"?"rgba(0,0,0,.75)":"rgba(255,255,255,.75)"}`,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 5,
                                }}
                            />
                        )}
                    </div>
                </div>
                <div 
                    ref={containerRef}
                    className="absolute bottom-[50px] w-[100px] h-[100px] z-20">
                    <input
                        type="file"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 25,
                            cursor: "pointer",
                        }}
                        multiple={false}
                        onChange={async (e) => {
                            console.log("File input clicked");
                            try {
                                if (e.target.files) {
                                    const url = await fileReading(false, [...e.target.files]);
                                    if (url) {
                                        setImageURL(url);
                                    }
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    />
                        {imageURL ? (
                            <Image
                                src={imageURL}
                                alt="Profile image"
                                width={containerRef.current?.getBoundingClientRect().width}
                                height={containerRef.current?.getBoundingClientRect().height}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    border:`3px solid ${theme == "light"?"rgba(0,0,0,.75)":"rgba(255,255,255,.75)"}`,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 5,
                                }}
                            />
                        ) : (
                            <RiImageCircleFill
                                size={100}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 5,
                                }}
                            />
                        )}
                    </div>
                    <div className="w-[80%] h-auto flex flex-col justify-center items-start p-6">
                        <h1 className="text-3xl font-bold">{task.title}</h1>
                        <p>{task.description}</p>
                    </div>
            </section>
            <Button
                onClick={async () => {
                    try {
                        console.log("Button clicked");
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                Confirm
            </Button>
        </main>
    );
}