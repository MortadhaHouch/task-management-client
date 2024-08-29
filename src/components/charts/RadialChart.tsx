/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Status } from "../../../utils/types";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useTheme } from "next-themes";

export function RadialChart({
    dataSets,
    count,
    title,
    description,
    }: {
    dataSets: any[];
    count: number;
    title: string;
    description?: string;
    }) {
    const chartConfig = {
        progress: {
        label: title,
        color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig
    const { theme } = useTheme();
    const [timeRange, setTimeRange] = useState<string>("");
    const [tasksCount, setTasksCount] = useState<number>(0);
    const [progressValue, setProgressValue] = useState<number>(0);
    const filterDataByTimeRange = () => {
        let daysToSubtract = 0;
        switch (timeRange) {
            case "7d":
                daysToSubtract = 7;
                break;
            case "30d":
                daysToSubtract = 30;
                break;
            case "364d":
                daysToSubtract = 364;
                break;
            default:
                return dataSets;
        }
        return dataSets.filter((item) => new Date(item.dueDate) >= new Date(Date.now() - daysToSubtract * 24 * 60 * 60 * 1000));
    };
    useEffect(() => {
        const calculateTasksCountAndProgress = () => {
        const filteredData = filterDataByTimeRange();
        let totalCount = 0;
        switch (title) {
            case Status.COMPLETED.toLowerCase():
                totalCount = filteredData.reduce((sum, item) => sum + item.completed, 0);
                break;
            case Status.OVERDUE.toLowerCase():
                totalCount = filteredData.reduce((sum, item) => sum + item.overdue, 0);
                break;
            case Status.PENDING.toLowerCase():
                totalCount = filteredData.reduce((sum, item) => sum + item.pending, 0);
                break;
            case Status.CANCELLED.toLowerCase():
                totalCount = filteredData.reduce((sum, item) => sum + item.cancelled, 0);
                break;
            default:
                totalCount = 0;
                break;
        }
        setTasksCount(totalCount);
        const progress = count > 0 ? Math.min((totalCount / count) * 100, 100) : 0;
        setProgressValue(progress);
        };
        calculateTasksCountAndProgress();
    }, [dataSets, title, count, timeRange]);
    const chartData = [{ name: title, value: progressValue }];
    console.log(dataSets);
    return (
        <Card className="flex flex-col w-full h-full border-none relative">
        <div className={`absolute top-1 right-1 z-20 ${theme == "light" ? "bg-white" : "bg-black"}`}>
            <DropdownMenu>
            <DropdownMenuTrigger>
                <BsThreeDotsVertical size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`text-start cursor-pointer p-1 ${theme=="light"?"bg-white":"bg-black"}`}>
                <DropdownMenuItem onClick={() => setTimeRange("7d")}>
                Last 7 days
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeRange("30d")}>
                Last month
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTimeRange("364d")}>
                Last year
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <CardHeader className="items-center pb-0">
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px]"
            >
            <RadialBarChart
                width={200}
                height={200}
                data={chartData}
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                outerRadius={80}
            >
                <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
                />
                <RadialBar dataKey="value" cornerRadius={10} background />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                    content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                        <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {
                                Number(progressValue.toFixed(1)) > 50 ?(
                                    <tspan className="fill-foreground text-xl text-green-600 font-bold">
                                        {progressValue.toFixed(1)}%
                                    </tspan>
                                ):(
                                    <tspan className="fill-foreground text-xl text-orange-600 font-bold">
                                        {progressValue.toFixed(1)}%
                                    </tspan>
                                )
                            }
                            <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                            >
                            {title}
                            </tspan>
                        </text>
                        );
                    }
                    }}
                />
                </PolarRadiusAxis>
            </RadialBarChart>
            </ChartContainer>
        </CardContent>
        </Card>
    );
}