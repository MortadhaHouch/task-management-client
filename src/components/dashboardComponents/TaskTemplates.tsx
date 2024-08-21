"use client"

import { CardHoverEffectDemo } from "../main/CardHoverEffectDemo";

const templates:string[] = [
    "/templates/Beige Clean and Trendy Daily To Do List.pdf",
    "/templates/Beige Minimalist To Do List Planner.pdf",
    "/templates/Black and Beige Simple Lined To-Do Planner.pdf",
    "/templates/Black and White Minimalist Lines To-Do List.pdf",
    "/templates/Black and White Simple Minimalist To do list Planner Flyer.pdf",
    "/templates/Black To-Do List Instagram Post.pdf",
    "/templates/Cream and Pink Modern To-Do List Checklist.pdf",
    "/templates/Cute Minimalist To Do List.pdf",
    "/templates/Green and Champagne Simple Floral To-Do List Planner.pdf",
    "/templates/Grey Minimalistic To Do List Instagram Post.pdf",
    "/templates/Minimal To Do List Planner.pdf",
    "/templates/Minimalist AI To Do List Instagram Post.pdf",
    "/templates/Modern Black and White Creative To-Do List.pdf",
    "/templates/Pastel Beige Aesthetic Reminder and To Do List Instagram Story.pdf",
    "/templates/To Do List Planning Whiteboard in Blue Green Spaced Color Blocks Style.pdf",
    "/templates/To-do List Doc .pdf",
    "/templates/White and Beige Minimalist To Do List Planner.pdf",
    "/templates/White Grey Simple To Do List Instagram Post.pdf",
];
export default function TaskTemplates() {
    return (
        <section className="relative w-[80vw] h-auto overflow-hidden flex flex-row justify-center items-start pt-6 pb-6">
            <CardHoverEffectDemo items={templates} />
        </section>
    );
}